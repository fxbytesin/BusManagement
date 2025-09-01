const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getdashboardStatistics = async (req, res) => {
  try {
    // Parse period query param
    const { period = 'daily' } = req.query;
    
    let startDate, endDate;
    const now = new Date();

    // Helper function to zero time portion for date comparisons
    const zeroTime = (date) => {
      const d = new Date(date);
      d.setHours(0, 0, 0, 0);
      return d;
    };

    switch(period.toLowerCase()) {
      case 'weekly':
        // Start of current week (Monday)
        startDate = zeroTime(new Date(now.setDate(now.getDate() - now.getDay() + 1)));
        endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 7);
        break;
      case 'monthly':
        startDate = zeroTime(new Date(now.getFullYear(), now.getMonth(), 1));
        endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        break;
      case 'yearly':
        startDate = zeroTime(new Date(now.getFullYear(), 0, 1));
        endDate = new Date(now.getFullYear() + 1, 0, 1);
        break;
      case 'daily':
      default:
        startDate = zeroTime(now);
        endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 1);
        break;
    }

    // Convert dates to ISO string with just date part
    const startDateStr = startDate.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];

    const bigIntReplacer = (key, value) => 
      typeof value === 'bigint' ? Number(value) : value;

    // Overview Stats (total buses, active buses, revenue, etc.)
    const todayStats = await prisma.$queryRawUnsafe(
      `
      SELECT 
        COUNT(DISTINCT b.id) as total_buses,
        COUNT(DISTINCT CASE WHEN b.status = 'running' THEN b.id END) as active_buses,
        COALESCE(SUM(CASE WHEN t.journey_date >= ? AND t.journey_date < ? THEN t.fare END), 0) as total_revenue,
        COUNT(CASE WHEN t.journey_date >= ? AND t.journey_date < ? THEN t.id END) as total_passengers,
        COUNT(CASE WHEN p.booked_at >= ? AND p.booked_at < ? THEN p.id END) as total_packages
      FROM Bus b
      LEFT JOIN Ticket t ON b.id = t.bus_id
      LEFT JOIN Package p ON b.id = p.bus_id
      WHERE b.user_id = ?
      `,
      startDateStr, endDateStr,
      startDateStr, endDateStr,
      startDateStr, endDateStr,
      req.user.id
    );

    // Bus-specific stats with occupancy
    const busStats = await prisma.$queryRawUnsafe(
      `
      SELECT 
        b.id,
        b.bus_number,
        b.status,
        b.capacity,
        b.current_location,
        r.name as route_name,
        COUNT(CASE WHEN t.journey_date >= ? AND t.journey_date < ? THEN t.id END) as total_passengers,
        COALESCE(SUM(CASE WHEN t.journey_date >= ? AND t.journey_date < ? THEN t.fare END), 0) as total_revenue,
        COUNT(CASE WHEN p.booked_at >= ? AND p.booked_at < ? THEN p.id END) as total_packages,
        CASE 
          WHEN b.capacity > 0 THEN ROUND( (COUNT(CASE WHEN t.journey_date >= ? AND t.journey_date < ? THEN t.id END) / b.capacity) * 100, 2)
          ELSE 0
        END AS occupancy_rate
      FROM Bus b
      LEFT JOIN Route r ON b.route_id = r.id
      LEFT JOIN Ticket t ON b.id = t.bus_id
      LEFT JOIN Package p ON b.id = p.bus_id
      WHERE b.user_id = ?
      GROUP BY b.id
      ORDER BY total_revenue DESC
      `,
      startDateStr, endDateStr,
      startDateStr, endDateStr,
      startDateStr, endDateStr,
      startDateStr, endDateStr,
      req.user.id
    );

    const response = {
      overview: todayStats[0],
      buses: busStats
    };

    res.json(JSON.parse(JSON.stringify(response, bigIntReplacer)));

  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getRevenueReport = async (req, res) => {
  try {
    let { startDate, endDate } = req.query;

    // ✅ Default dates agar user ne nahi bheje
    if (!startDate || !endDate) {
      const today = new Date();
      endDate = today.toISOString().split("T")[0]; // YYYY-MM-DD
      const lastYear = new Date();
      lastYear.setFullYear(today.getFullYear() - 1);
      startDate = lastYear.toISOString().split("T")[0];
    }

    const groupExprs = {
      daily: "DATE(period_date)",
      weekly: "YEARWEEK(period_date, 1)",
      monthly: "DATE_FORMAT(period_date, '%Y-%m')",
      yearly: "YEAR(period_date)",
    };

    const revenue = {};

    for (const [range, groupExpr] of Object.entries(groupExprs)) {
      const query = `
        SELECT ${groupExpr} AS period, b.bus_number, SUM(total_revenue) AS revenue
        FROM (
          -- Tickets
          SELECT DATE(t.journey_date) AS period_date, t.bus_id, SUM(t.fare) AS total_revenue
          FROM Ticket t
          JOIN Bus b ON t.bus_id = b.id
          WHERE t.journey_date BETWEEN ? AND ? AND b.user_id = ?
          GROUP BY DATE(t.journey_date), t.bus_id

          UNION ALL

          -- Packages
          SELECT DATE(p.booked_at) AS period_date, p.bus_id, SUM(p.fare) AS total_revenue
          FROM Package p
          JOIN Bus b ON p.bus_id = b.id
          WHERE p.booked_at BETWEEN ? AND ? AND b.user_id = ?
          GROUP BY DATE(p.booked_at), p.bus_id
        ) combined
        JOIN Bus b ON combined.bus_id = b.id
        GROUP BY period, b.bus_number
        ORDER BY period ASC
      `;

      const params = [startDate, endDate, req.user.id, startDate, endDate, req.user.id];
      let data = await prisma.$queryRawUnsafe(query, ...params);

      // ✅ BigInt → Number
      data = JSON.parse(
        JSON.stringify(data, (key, value) =>
          typeof value === "bigint" ? Number(value) : value
        )
      );

      // ✅ Pivot buses → { period, bus1: value, bus2: value }
      const pivot = {};
      data.forEach((row) => {
        if (!pivot[row.period]) pivot[row.period] = { period: row.period };
        pivot[row.period][row.bus_number] = row.revenue;
      });

      let formatted = Object.values(pivot);

      // ✅ Format labels
      formatted = formatted.map((row) => {
        let label = row.period;
        if (range === "daily") {
          label = new Date(row.period).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
          });
          return { date: label, ...row, period: undefined };
        }
        if (range === "weekly") {
          const year = String(row.period).substring(0, 4);
          const week = String(row.period).substring(4);
          return { week: `Week ${week}`, ...row, period: undefined };
        }
        if (range === "monthly") {
          const [y, m] = row.period.split("-");
          const month = new Date(`${y}-${m}-01`).toLocaleDateString("en-US", {
            month: "short",
          });
          return { month, ...row, period: undefined };
        }
        if (range === "yearly") {
          return { year: row.period, ...row, period: undefined };
        }
        return row;
      });

      revenue[range] = formatted;
    }

    res.json({ revenue });
  } catch (error) {
    console.error("Error fetching revenue report:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



