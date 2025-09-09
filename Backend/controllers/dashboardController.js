const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

function zeroTime(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getMonday(d) {
  d = new Date(d);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getPeriodRange(period) {
  const now = new Date();
  let startDate, endDate;

  switch (period.toLowerCase()) {
    case 'weekly':
      startDate = zeroTime(getMonday(now));
      endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 7);
      break;
    case 'monthly':
      startDate = zeroTime(new Date(now.getFullYear(), now.getMonth(), 1));
      endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + 1);
      break;
    case 'yearly':
      startDate = zeroTime(new Date(now.getFullYear(), 0, 1));
      endDate = new Date(startDate);
      endDate.setFullYear(endDate.getFullYear() + 1);
      break;
    case 'daily':
    default:
      startDate = zeroTime(now);
      endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 1);
      break;
  }

  return { startDate, endDate };
}

function toLocalDateString(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

exports.getTripsCompletedReport = async (req, res) => {
  try {
    const userId = req.user.id;

    const fetchTripsAndTicketsForPeriod = async (period) => {
      const { startDate, endDate } = getPeriodRange(period);
      const startDateStr = toLocalDateString(startDate);
      const endDateStr = toLocalDateString(endDate);

      const query = `
        SELECT 
          b.id AS bus_id,
          b.bus_number,
          COUNT(DISTINCT t.id) AS trips_completed,
          COUNT(DISTINCT tk.id) AS tickets_generated
        FROM Bus b
        LEFT JOIN Trip t 
          ON t.bus_id = b.id
          AND t.status = 'COMPLETED'
          AND t.end_time IS NOT NULL
          AND t.end_time >= ?
          AND t.end_time < ?
        LEFT JOIN Ticket tk
          ON tk.trip_id = t.id
          AND tk.journey_date >= ?
          AND tk.journey_date < ?
        WHERE b.user_id = ?
        GROUP BY b.id, b.bus_number
        ORDER BY trips_completed DESC
      `;

      const params = [startDateStr, endDateStr, startDateStr, endDateStr, userId];
      const result = await prisma.$queryRawUnsafe(query, ...params);
      return JSON.parse(JSON.stringify(result, (key, value) => typeof value === 'bigint' ? Number(value) : value));
    };

    const fetchOccupancyRateForPeriod = async (period) => {
      const { startDate, endDate } = getPeriodRange(period);
      const startDateStr = toLocalDateString(startDate);
      const endDateStr = toLocalDateString(endDate);

      const query = `
        SELECT 
          b.id AS bus_id,
          b.bus_number,
          b.capacity,
          COUNT(tk.id) AS booked_seats,
          ROUND((COUNT(tk.id) / b.capacity) * 100, 2) AS occupancy_rate
        FROM Bus b
        LEFT JOIN Ticket tk
          ON tk.bus_id = b.id
          AND tk.status IN ('booked', 'used')
          AND tk.journey_date >= ?
          AND tk.journey_date < ?
        WHERE b.user_id = ?
        GROUP BY b.id, b.bus_number, b.capacity
        ORDER BY occupancy_rate DESC
      `;

      const params = [startDateStr, endDateStr, userId];
      const result = await prisma.$queryRawUnsafe(query, ...params);
      return JSON.parse(JSON.stringify(result, (key, value) => typeof value === 'bigint' ? Number(value) : value));
    };

    const fetchRevenueForPeriod = async (period) => {
      const { startDate, endDate } = getPeriodRange(period);
      const startDateStr = toLocalDateString(startDate);
      const endDateStr = toLocalDateString(endDate);

      const query = `
        SELECT 
          b.id AS bus_id,
          b.bus_number,
          COALESCE(SUM(tk.fare), 0) AS revenue
        FROM Bus b
        LEFT JOIN Ticket tk
          ON tk.bus_id = b.id
          AND tk.status IN ('booked', 'used')
          AND tk.journey_date >= ?
          AND tk.journey_date < ?
        WHERE b.user_id = ?
        GROUP BY b.id, b.bus_number
        ORDER BY revenue DESC
      `;

      const params = [startDateStr, endDateStr, userId];
      const result = await prisma.$queryRawUnsafe(query, ...params);
      return JSON.parse(JSON.stringify(result, (key, value) => typeof value === 'bigint' ? Number(value) : value));
    };

    // Parallel fetch for all periods
    const periods = ['daily', 'weekly', 'monthly', 'yearly'];

    const tripsAndTickets = await Promise.all(periods.map(period => fetchTripsAndTicketsForPeriod(period)));
    const occupancyRates = await Promise.all(periods.map(period => fetchOccupancyRateForPeriod(period)));
    const revenues = await Promise.all(periods.map(period => fetchRevenueForPeriod(period)));

    res.json({
      tripsAndTickets: {
        daily: tripsAndTickets[0],
        weekly: tripsAndTickets[1],
        monthly: tripsAndTickets[2],
        yearly: tripsAndTickets[3],
      },
      occupancyRate: {
        daily: occupancyRates[0],
        weekly: occupancyRates[1],
        monthly: occupancyRates[2],
        yearly: occupancyRates[3],
      },
      revenue: {
        daily: revenues[0],
        weekly: revenues[1],
        monthly: revenues[2],
        yearly: revenues[3],
      },
    });
  } catch (error) {
    console.error('Error fetching report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getActiveBusesCount = async (req, res) => {
  try {
    const userId = req.user.id;

    // Query 1: Count distinct buses with at least one RUNNING Trip for this user
    const activeQuery = `
      SELECT 
        COUNT(DISTINCT t.bus_id) AS active_buses_count
      FROM Trip t
      INNER JOIN Bus b ON t.bus_id = b.id
      WHERE t.status = 'RUNNING'
        AND b.user_id = ?
    `;
    // Query 2: Total buses for this user
    const totalBusQuery = `
      SELECT 
        COUNT(*) AS total_buses
      FROM Bus
      WHERE user_id = ?
    `;

    // Run both queries in parallel
    const [activeResult, totalResult] = await Promise.all([
      prisma.$queryRawUnsafe(activeQuery, userId),
      prisma.$queryRawUnsafe(totalBusQuery, userId),
    ]);

    const active_buses_count =
      Array.isArray(activeResult) && activeResult.length
        ? Number(activeResult[0].active_buses_count) || 0
        : 0;

    const total_buses =
      Array.isArray(totalResult) && totalResult.length
        ? Number(totalResult[0].total_buses) || 0
        : 0;

    res.json({
      active_buses_count,
      total_buses
    });
  } catch (error) {
    console.error('Error fetching active/total buses count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


