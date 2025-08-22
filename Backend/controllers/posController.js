const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// Create POS machine with bus assignment validation
exports.createPOSMachine = async (req, res) => {
  try {
    const { serial_no, status, assigned, bus_id } = req.body;

    if (!serial_no) {
      return res.status(400).json({ error: "Serial number is required" });
    }

    const existing = await prisma.pOSMachine.findUnique({ where: { serial_no } });
    if (existing) {
      return res.status(400).json({ error: "POS machine with this serial number already exists" });
    }

    let assignedFlag = false;
    let assignedBusId = null;

    if (assigned) {
      if (!bus_id) {
        return res.status(400).json({ error: "bus_id is required when assigning POS machine" });
      }

      // Check if bus exists
      const bus = await prisma.bus.findUnique({ where: { id: bus_id } });
      if (!bus) {
        return res.status(404).json({ error: `Bus with id ${bus_id} not found` });
      }

      // Check if bus already has an assigned POS machine
      const existingAssignedPOS = await prisma.pOSMachine.findFirst({
        where: {
          bus_id: bus_id,
          assigned: true
        }
      });
      if (existingAssignedPOS) {
        return res.status(400).json({ error: `Bus with id ${bus_id} already has an assigned POS machine (id: ${existingAssignedPOS.id})` });
      }

      assignedFlag = true;
      assignedBusId = bus_id;
    }

    const newPOS = await prisma.pOSMachine.create({
      data: {
        serial_no,
        status: status || "active",
        assigned: assignedFlag,
        bus_id: assignedBusId,
      },
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

// Update POS machine with bus assignment validation
exports.updatePOSMachine = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { serial_no, status, assigned, bus_id } = req.body;
    let updateData = {};
    if (serial_no !== undefined) updateData.serial_no = serial_no;
    if (status !== undefined) updateData.status = status;

    if (assigned) {
      if (!bus_id) {
        return res.status(400).json({ error: "bus_id is required when assigning POS machine" });
      }

      // Check if bus exists
      const bus = await prisma.bus.findUnique({ where: { id: bus_id } });
      if (!bus) {
        return res.status(404).json({ error: `Bus with id ${bus_id} not found` });
      }

      // Check if this bus already has a different assigned POS machine
      const existingAssignedPOSOnBus = await prisma.pOSMachine.findFirst({
        where: {
          bus_id: bus_id,
          assigned: true,
          id: { not: id } // exclude current POS machine
        }
      });
      if (existingAssignedPOSOnBus) {
        return res.status(400).json({ error: `Bus with id ${bus_id} already has POS machine (id: ${existingAssignedPOSOnBus.id}) assigned` });
      }

      // Check if this POS machine is assigned to a different bus
      const existingPOS = await prisma.pOSMachine.findUnique({ where: { id } });
      if (existingPOS && existingPOS.bus_id && existingPOS.bus_id !== bus_id) {
        return res.status(400).json({
          error: `POS machine is already assigned to bus with id ${existingPOS.bus_id}`
        });
      }

      updateData.assigned = true;
      updateData.bus_id = bus_id;
    } else {
      updateData.assigned = false;
      updateData.bus_id = null;
    }

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
