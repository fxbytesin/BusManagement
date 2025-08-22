const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// Create POS machine
exports.createPOSMachine = async (req, res) => {
  try {
    const { serial_no, status } = req.body;
    if (!serial_no) {
      return res.status(400).json({ error: "Serial number is required" });
    }
    const existing = await prisma.pOSMachine.findUnique({ where: { serial_no } });
    if (existing) {
      return res.status(400).json({ error: "POS machine with this serial number already exists" });
    }
    const newPOS = await prisma.pOSMachine.create({
      data: { serial_no, status: status || "active", assigned: false },
    });
    res.status(201).json(newPOS);
  } catch (error) {
    console.error("Error creating POS machine:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all POS machines
exports.getAllPOSMachines = async (req, res) => {
  try {
    const posMachines = await prisma.pOSMachine.findMany({ include: { bus: true } });
    res.json(posMachines);
  } catch (error) {
    console.error("Error fetching POS machines:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get POS machine by ID
exports.getPOSMachineById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const posMachine = await prisma.pOSMachine.findUnique({ where: { id }, include: { bus: true } });
    if (!posMachine) {
      return res.status(404).json({ error: "POS machine not found" });
    }
    res.json(posMachine);
  } catch (error) {
    console.error("Error fetching POS machine:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update POS machine
exports.updatePOSMachine = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { serial_no, status, bus_id, assigned } = req.body;
    let updateData = {};
    if (serial_no !== undefined) updateData.serial_no = serial_no;
    if (status !== undefined) updateData.status = status;
    if (bus_id !== undefined) updateData.bus_id = bus_id;
    if (assigned !== undefined) updateData.assigned = assigned;
    if (assigned && !bus_id) {
      return res.status(400).json({ error: "Assigning POS requires bus_id" });
    }
    if (!assigned) updateData.bus_id = null; // Unassign bus

    const updatedPOS = await prisma.pOSMachine.update({
      where: { id },
      data: updateData,
    });
    res.json(updatedPOS);
  } catch (error) {
    console.error("Error updating POS machine:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete POS machine
exports.deletePOSMachine = async (req, res) => {
  try {
    const id = Number(req.params.id);
    await prisma.pOSMachine.delete({ where: { id } });
    res.json({ message: "POS machine deleted successfully" });
  } catch (error) {
    console.error("Error deleting POS machine:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
