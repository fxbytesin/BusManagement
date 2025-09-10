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

    // Tickets fetch with trip + route
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
        trip: {
          include: {
            route: true,
          },
        },
      },
    });

    if (!tickets.length) {
      return res
        .status(404)
        .json({ error: "No tickets found for this bus in given range" });
    }

    // 👇 Transform tickets
    const formattedTickets = tickets.map((t) => {
      const issueTime = new Date(t.issue_time).toLocaleString("en-IN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      const journeyDate = new Date(t.journey_date).toLocaleString("en-IN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const tripStart = new Date(t.trip.start_time).toLocaleString("en-IN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // 👇 Create trip_name by concatenating route.name + start_time
      const tripName = `${t.trip.route.name} - ${tripStart}`;

      return {
        id: t.id,
        ticket_number: t.ticket_number,
        from_stop: t.from_stop,
        to_stop: t.to_stop,
        passenger_type: t.passenger_type,
        fare: t.fare,
        issue_time: issueTime,
        journey_date: journeyDate,
        status: t.status,
        seat_no: t.seat_no,
        payment_mode: t.payment_mode,
        bus_number: t.bus.bus_number,
        trip_name: tripName,
      };
    });

    // 👇 Calculate total fare
    const totalFare = formattedTickets.reduce(
      (sum, t) => sum + Number(t.fare || 0),
      0
    );

    // 👇 Add summary row in CSV
    formattedTickets.push({
      id: "",
      ticket_number: "",
      from_stop: "",
      to_stop: "",
      passenger_type: "TOTAL FARE",
      fare: totalFare, 
      issue_time: "",
      journey_date: "",
      status: "",
      seat_no: "",
      payment_mode: "",
      bus_number: "",
      trip_name: "", 
    });

    // Fields for CSV
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
      { label: "Bus Number", value: "bus_number" },
      { label: "Trip Name", value: "trip_name" },
    ];

    const parser = new Parser({ fields });
    const csv = parser.parse(formattedTickets);

    res.header("Content-Type", "text/csv");
    res.attachment("tickets_export.csv");
    res.send(csv);
  } catch (error) {
    console.error("Error exporting tickets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};