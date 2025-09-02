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


exports.getRevenueReport=async (req, res) => {
  try {
    const { startDate, endDate, busId } = req.query;
    const tomorrow = new Date(endDate);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Base query
    let query = `
      SELECT 
        dates.date as date,
        COALESCE(SUM(t.fare), 0) as ticket_revenue,
        COALESCE(SUM(p.fare), 0) as package_revenue,
        COUNT(DISTINCT t.id) as total_tickets,
        COUNT(DISTINCT p.id) as total_packages
      FROM (
        SELECT DISTINCT journey_date as date FROM Ticket WHERE journey_date BETWEEN ? AND ?
        UNION
        SELECT DISTINCT DATE(booked_at) as date FROM Package WHERE DATE(booked_at) BETWEEN ? AND ?
      ) as dates
      LEFT JOIN Ticket t ON DATE(t.journey_date) = dates.date
      LEFT JOIN Package p ON DATE(p.booked_at) = dates.date
      LEFT JOIN Bus b ON (t.bus_id = b.id OR p.bus_id = b.id)
      WHERE b.user_id = ?
    `;

    // Add bus filter if provided
    if (busId) {
      query += ' AND b.id = ?';
    }

    // Add grouping and ordering
    query += ' GROUP BY dates.date ORDER BY dates.date DESC';

    // Prepare parameters
    const params = [startDate, endDate, startDate, endDate, req.user.id];
    if (busId) {
      params.push(parseInt(busId));
    }

    // Execute query
    const revenueData = await prisma.$queryRawUnsafe(query, ...params);

    // BigInt handling
    const bigIntReplacer = (key, value) => 
      typeof value === 'bigint' ? Number(value) : value;

    res.json(JSON.parse(JSON.stringify(revenueData, bigIntReplacer)));
  } catch (error) {
    console.error('Error fetching revenue report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}