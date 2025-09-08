const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

async function main() {
  const adminEmail = "admin@example.com";
  const adminPhone = "8989939165";
  const adminName = "Admin User";

  // Check if admin already exists
  const existingAdmin = await prisma.user.findFirst({
    where: { role: 'admin', email: adminEmail }
  });

  if (existingAdmin) {
    console.log("Admin user already exists, skipping seed.");
    return;
  }

  const hashedPassword = await bcrypt.hash("Admin@123", 10);

  // Create admin user
  const adminUser = await prisma.user.create({
    data: {
      name: adminName,
      email: adminEmail,
      phone: adminPhone,
      role: 'admin',
      password: hashedPassword,
      is_verified: true,
    }
  });

  console.log("Admin user created:", adminUser);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
