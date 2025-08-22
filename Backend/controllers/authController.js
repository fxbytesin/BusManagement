require("dotenv").config();
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const crypto = require("crypto");
const twilio = require("twilio");

const JWT_SECRET = process.env.JWT_SECRET || "replace_me";
const OTP_EXPIRY_MINUTES = parseInt(process.env.OTP_EXPIRY_MINUTES || "5", 10);

// --- Setup Twilio client ---
const twilioClient = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// --- Helpers ---
function generateOTP() {
  return crypto.randomInt(100000, 999999).toString();
}

async function sendOTP(phone, otp) {
  try {
    await twilioClient.messages.create({
      body: `Your Bus Management OTP is ${otp}. It expires in ${OTP_EXPIRY_MINUTES} minutes.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });
    console.log(` OTP sent to ${phone}`);
  } catch (err) {
    console.error(" Failed to send OTP:", err);
  }
}

async function saveOTP(userId, otpCode, otpType) {
  const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
  return prisma.oTP.create({
    data: {
      user_id: userId,
      otp_code: otpCode,
      otp_type: otpType,
      expires_at: expiresAt,
    },
  });
}

const allowedRoles = ['admin', 'conductor'];

// 1. Request Registration OTP
module.exports.requestRegistrationOTP = async (req, res) => {
  try {
    const { phone, name, company_name, role } = req.body;
    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }
    if (!role || !allowedRoles.includes(role)) {
      return res.status(400).json({ error: "Role must be 'admin' or 'conductor'" });
    }

    let user = await prisma.user.findUnique({ where: { phone } });

    if (user && user.is_verified) {
      return res.status(400).json({ error: "User already exists" });
    }

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: name || null,
          phone,
          company_name: company_name || null,
          is_verified: false,
          role,
        },
      });
    } else {
      // Allow update of role in case of incomplete registration
      if (user.role !== role) {
        await prisma.user.update({
          where: { id: user.id },
          data: { role },
        });
      }
    }

    const otp = generateOTP();
    await saveOTP(user.id, otp, "REGISTRATION");
    await sendOTP(phone, otp);

    res.json({ message: "OTP sent for registration", phone });
  } catch (error) {
    console.error("Request Registration OTP error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// 2. Verify Registration OTP
module.exports.verifyRegistrationOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      return res.status(400).json({ error: "Phone number and OTP are required" });
    }

    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user) return res.status(404).json({ error: "User not found" });
    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ error: "Registration only allowed for admin or conductor" });
    }

    const otpRecord = await prisma.oTP.findFirst({
      where: {
        user_id: user.id,
        otp_code: otp,
        otp_type: "REGISTRATION",
        is_used: false,
        expires_at: { gt: new Date() },
      },
      orderBy: { created_at: "desc" },
    });

    if (!otpRecord) return res.status(400).json({ error: "Invalid or expired OTP" });

    await prisma.$transaction([
      prisma.oTP.update({
        where: { id: otpRecord.id },
        data: { is_used: true },
      }),
      prisma.user.update({
        where: { id: user.id },
        data: { is_verified: true },
      }),
    ]);

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });

    res.json({
      message: "Registration successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Verify Registration OTP error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// 3. Request Login OTP
module.exports.requestLoginOTP = async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }

    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user || !user.is_verified) {
      return res.status(404).json({ error: "User not found or not verified" });
    }
    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ error: "Login only allowed for admin or conductor" });
    }

    const otp = generateOTP();
    await saveOTP(user.id, otp, "LOGIN");
    await sendOTP(phone, otp);

    res.json({ message: "OTP sent for login",phone });
  } catch (error) {
    console.error("Request Login OTP error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// 4. Verify Login OTP
module.exports.verifyLoginOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      return res.status(400).json({ error: "Phone number and OTP are required" });
    }

    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user || !user.is_verified) {
      return res.status(404).json({ error: "User not found or not verified" });
    }
    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ error: "Login only allowed for admin or conductor" });
    }

    const otpRecord = await prisma.oTP.findFirst({
      where: {
        user_id: user.id,
        otp_code: otp,
        otp_type: "LOGIN",
        is_used: false,
        expires_at: { gt: new Date() },
      },
      orderBy: { created_at: "desc" },
    });

    if (!otpRecord) return res.status(400).json({ error: "Invalid or expired OTP" });

    await prisma.oTP.update({
      where: { id: otpRecord.id },
      data: { is_used: true },
    });

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });

    res.json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Verify Login OTP error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
