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

  console.log('Calculated Period Range:', {
    period,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  });

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
    // Helper function: trips completed + tickets generated
    const fetchTripsAndTicketsForPeriod = async (period) => {
      const { startDate, endDate } = getPeriodRange(period);
      const startDateStr = toLocalDateString(startDate);
      const endDateStr = toLocalDateString(endDate);
      const userId = req.user.id;

      const params = [startDateStr, endDateStr, startDateStr, endDateStr, userId];

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
          AND DATE(t.end_time) >= ?
          AND DATE(t.end_time) < ?
        LEFT JOIN Ticket tk
          ON tk.bus_id = b.id
          AND DATE(tk.journey_date) >= ?
          AND DATE(tk.journey_date) < ?
        WHERE b.user_id = ?
        GROUP BY b.id, b.bus_number
        ORDER BY trips_completed DESC
      `;

      const result = await prisma.$queryRawUnsafe(query, ...params);

      return JSON.parse(JSON.stringify(result, (key, value) =>
        typeof value === 'bigint' ? Number(value) : value));
    };

    // Helper function: occupancy rate
    const fetchOccupancyRateForPeriod = async (period) => {
      const { startDate, endDate } = getPeriodRange(period);
      const startDateStr = toLocalDateString(startDate);
      const endDateStr = toLocalDateString(endDate);
      const userId = req.user.id;

      const params = [startDateStr, endDateStr, userId];

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
          AND DATE(tk.journey_date) >= ?
          AND DATE(tk.journey_date) < ?
        WHERE b.user_id = ?
        GROUP BY b.id, b.bus_number, b.capacity
        ORDER BY occupancy_rate DESC
      `;

      const result = await prisma.$queryRawUnsafe(query, ...params);

      return JSON.parse(JSON.stringify(result, (key, value) =>
        typeof value === 'bigint' ? Number(value) : value));
    };

    // Helper function: revenue per bus
    const fetchRevenueForPeriod = async (period) => {
      const { startDate, endDate } = getPeriodRange(period);
      const startDateStr = toLocalDateString(startDate);
      const endDateStr = toLocalDateString(endDate);
      const userId = req.user.id;

      const params = [startDateStr, endDateStr, userId];

      const query = `
        SELECT 
          b.id AS bus_id,
          b.bus_number,
          COALESCE(SUM(tk.fare), 0) AS revenue
        FROM Bus b
        LEFT JOIN Ticket tk
          ON tk.bus_id = b.id
          AND tk.status IN ('booked', 'used')
          AND DATE(tk.journey_date) >= ?
          AND DATE(tk.journey_date) < ?
        WHERE b.user_id = ?
        GROUP BY b.id, b.bus_number
        ORDER BY revenue DESC
      `;

      const result = await prisma.$queryRawUnsafe(query, ...params);

      return JSON.parse(JSON.stringify(result, (key, value) =>
        typeof value === 'bigint' ? Number(value) : value));
    };

    // Fetch all in parallel (trips & tickets, occupancy, revenue)
    const [dailyTrips, weeklyTrips, monthlyTrips, yearlyTrips] = await Promise.all([
      fetchTripsAndTicketsForPeriod('daily'),
      fetchTripsAndTicketsForPeriod('weekly'),
      fetchTripsAndTicketsForPeriod('monthly'),
      fetchTripsAndTicketsForPeriod('yearly')
    ]);

    const [dailyOcc, weeklyOcc, monthlyOcc, yearlyOcc] = await Promise.all([
      fetchOccupancyRateForPeriod('daily'),
      fetchOccupancyRateForPeriod('weekly'),
      fetchOccupancyRateForPeriod('monthly'),
      fetchOccupancyRateForPeriod('yearly')
    ]);

    const [dailyRevenue, weeklyRevenue, monthlyRevenue, yearlyRevenue] = await Promise.all([
      fetchRevenueForPeriod('daily'),
      fetchRevenueForPeriod('weekly'),
      fetchRevenueForPeriod('monthly'),
      fetchRevenueForPeriod('yearly')
    ]);

    // Combine all responses
    res.json({
      tripsAndTickets: {
        daily: dailyTrips,
        weekly: weeklyTrips,
        monthly: monthlyTrips,
        yearly: yearlyTrips
      },
      occupancyRate: {
        daily: dailyOcc,
        weekly: weeklyOcc,
        monthly: monthlyOcc,
        yearly: yearlyOcc
      },
      revenue: {
        daily: dailyRevenue,
        weekly: weeklyRevenue,
        monthly: monthlyRevenue,
        yearly: yearlyRevenue
      }
    });

  } catch (error) {
    console.error('Error fetching report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



