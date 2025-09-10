const { PrismaClient } = require('../generated/prisma');
const { Parser } = require("json2csv");
const prisma = new PrismaClient();

// CSV
exports.exportTickets = async (req, res) => {
  try {
    const { bus_id, start_time, end_time } = req.body;

    if (!bus_id || !start_time || !end_time) {
      return res
        .status(400)
        .json({ error: "bus_id, start_time and end_time are required" });
    }

    const fromDate = new Date(start_time + "T00:00:00.000Z");
    const toDate = new Date(end_time + "T23:59:59.999Z");

    // Tickets fetch
    const tickets = await prisma.ticket.findMany({
      where: {
        bus_id: parseInt(bus_id),
        trip: {
          created_at: {
            gte: fromDate,
            lte: toDate,
          },
        },
      },
      include: {
        bus: true,
        trip: true,
      },
    });

    if (!tickets.length) {
      return res
        .status(404)
        .json({ error: "No tickets found for this bus in given range" });
    }

    // 👇 Transform dates before CSV export
    const formattedTickets = tickets.map((t) => ({
      ...t,
      issue_time: new Date(t.issue_time).toLocaleString("en-IN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
      journey_date: new Date(t.journey_date).toLocaleString("en-IN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    }));

    const fields = [
  { label: "Ticket ID", value: "id" },
  { label: "Ticket Number", value: "ticket_number" },
  { label: "From Stop", value: "from_stop" },
  { label: "To Stop", value: "to_stop" },
  { label: "Passenger Type", value: "passenger_type" },
  { label: "Fare (₹)", value: "fare" },
  { label: "Issue Time", value: "issue_time" },
  { label: "Journey Date", value: "journey_date" },
  { label: "Status", value: "status" },
  { label: "Seat No", value: "seat_no" },
  { label: "Payment Mode", value: "payment_mode" },
  { label: "Bus Number", value: "bus.bus_number" },
  { label: "Trip ID", value: "trip.id" },
];


    const parser = new Parser({ fields });
    const csv = parser.parse(formattedTickets);

    // Always return as CSV file (response.csv)
    res.header("Content-Type", "text/csv");
    res.attachment("response.csv");
    res.send(csv);
  } catch (error) {
    console.error("Error exporting tickets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};