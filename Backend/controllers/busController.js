const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getAllBuses = async (req, res) => {
  try {
    const {
      search = "",
      limit = 10,
      page = 1,
      order = "ASC",
      orderColumn = "created_at"
    } = req.body; // ← read from body since you're posting JSON

    const take = Number(limit) || 10;
    const pageNum = Number(page) || 1;
    const skip = (pageNum - 1) * take;

    // ✅ sort order
    const sortOrder = String(order).toUpperCase() === "DESC" ? "desc" : "asc";

    // ✅ allowed columns (flat + relations via aliases)
    const validFlatCols = ["created_at", "bus_number", "updated_at"];
    const validRelCols  = ["route_name", "driver_name", "conductor_name"];

    const sortColumn =
      (orderColumn && (validFlatCols.includes(orderColumn) || validRelCols.includes(orderColumn)))
        ? orderColumn
        : "created_at";

    // ✅ build orderBy correctly (relations need nested format)
    let orderBy;
    if (validFlatCols.includes(sortColumn)) {
      orderBy = { [sortColumn]: sortOrder };
    } else if (sortColumn === "route_name") {
      orderBy = { route: { name: sortOrder } };
    } else if (sortColumn === "driver_name") {
      orderBy = { driver: { name: sortOrder } };
    } else if (sortColumn === "conductor_name") {
      orderBy = { conductor: { name: sortOrder } };
    } else {
      orderBy = { created_at: sortOrder };
    }

    const term = (search ?? "").trim();

    // ✅ search (no `mode` since your setup errored on it)
    const whereCondition = {
      ...(req.user?.id ? { user_id: req.user.id } : {}), // keep if you need per-user data
      ...(term
        ? {
            OR: [
              { bus_number: { contains: term } },
              { route: { name: { contains: term } } },
              { route: { code: { contains: term } } },
              { driver: { name: { contains: term } } },
              { conductor: { name: { contains: term } } }
            ]
          }
        : {})
    };

    const [buses, totalCount] = await Promise.all([
      prisma.bus.findMany({
        where: whereCondition,
        include: {
          route: { select: { name: true, code: true } },
          driver: { select: { name: true } },
          conductor: { select: { name: true } }
        },
        orderBy,
        skip,
        take
      }),
      prisma.bus.count({ where: whereCondition })
    ]);

    const formattedBuses = buses.map(bus => ({
      ...bus,
      route_name: bus.route?.name ?? null,
      route_code: bus.route?.code ?? null,
      driver_name: bus.driver?.name ?? null,
      conductor_name: bus.conductor?.name ?? null
    }));

    res.json({
      data: formattedBuses,
      pagination: {
        total: totalCount,
        page: pageNum,
        limit: take,
        totalPages: Math.ceil(totalCount / take)
      }
    });
  } catch (error) {
    console.error("Error fetching buses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



exports.createBus = async (req, res) => {
  try {
    const { bus_number, capacity, last_maintenance, insurance_expiry, permit_expiry } = req.body;

    // Basic validation
    if (!bus_number || !capacity) {
      return res.status(400).json({ error: 'Bus number and capacity are required' });
    }

    // Ensure bus_number is unique
    const existingBus = await prisma.bus.findUnique({ where: { bus_number } });
    if (existingBus) {
      return res.status(400).json({ error: 'Bus number already exists' });
    }

    // Validate dates if provided
    const validateDate = (date) => (date ? !isNaN(Date.parse(date)) : true);
    if (!validateDate(last_maintenance) || !validateDate(insurance_expiry) || !validateDate(permit_expiry)) {
      return res.status(400).json({ error: 'One or more dates are invalid' });
    }

    // Create new bus entry with only the given fields
    const newBus = await prisma.bus.create({
      data: {
        user_id: req.user.id,
        bus_number,
        capacity,
        last_maintenance: last_maintenance ? new Date(last_maintenance) : null,
        insurance_expiry: insurance_expiry ? new Date(insurance_expiry) : null,
        permit_expiry: permit_expiry ? new Date(permit_expiry) : null,
      }
    });
    res.status(201).json(newBus);
  } catch (error) {
    console.error('Error creating bus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.updateBus = async (req, res) => {
  try {
    const busId = parseInt(req.params.id);
    const { bus_number, capacity, last_maintenance, insurance_expiry, permit_expiry } = req.body;

    if (!bus_number || !capacity) {
      return res.status(400).json({ error: 'Bus number and capacity are required' });
    }

    // Check if another bus with this number exists (excluding the one being updated)
    const existingBus = await prisma.bus.findUnique({ where: { bus_number } });
    if (existingBus && existingBus.id !== busId) {
      return res.status(400).json({ error: 'Bus number already exists' });
    }

    // Date-only validation (YYYY-MM-DD)
    const validateDateOnly = (date) => {
      if (!date) return true;
      // Accepts only YYYY-MM-DD
      const re = /^\d{4}-\d{2}-\d{2}$/;
      return re.test(date) && !isNaN(new Date(date).getTime());
    };

    if (
      !validateDateOnly(last_maintenance) ||
      !validateDateOnly(insurance_expiry) ||
      !validateDateOnly(permit_expiry)
    ) {
      return res.status(400).json({ error: 'One or more dates are invalid (YYYY-MM-DD format required)' });
    }

    // Build update object; only set fields that are present
    const updateObj = {
      bus_number,
      capacity,
      last_maintenance: last_maintenance ? new Date(last_maintenance) : undefined,
      insurance_expiry: insurance_expiry ? new Date(insurance_expiry) : undefined,
      permit_expiry: permit_expiry ? new Date(permit_expiry) : undefined,
    };

    // Update bus
    const updatedBus = await prisma.bus.update({
      where: { id: busId },
      data: updateObj,
    });

    res.status(200).json(updatedBus);

  } catch (error) {
    console.error('Error updating bus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.deleteBus=async (req, res) => {
  try {
    const busId = parseInt(req.params.id);

    await prisma.bus.delete({
      where: { 
        id: busId,
        user_id: req.user.id 
      }
    });

    res.json({ message: 'Bus deleted successfully' });
  } catch (error) {
    console.error('Error deleting bus:', error);
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Bus not found' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}





