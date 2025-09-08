import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import ApiService from "../../services/api";

const DashboardGraphs = ({ t }) => {
  const [range, setRange] = useState("daily");
  const [data, setData] = useState({
    trips: [],
    tickets: [],
    occupancyRate: [],
    revenue: [],
  });
  const [loading, setLoading] = useState(false);

  // Fetch API data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await ApiService.getDashboard();
      if (res.success) {
        // Separate trips & tickets
        const trips = res.data.tripsAndTickets[range]?.map((item) => ({
          bus_number: item.bus_number,
          trips_completed: item.trips_completed,
        })) || [];

        const tickets = res.data.tripsAndTickets[range]?.map((item) => ({
          bus_number: item.bus_number,
          tickets_generated: item.tickets_generated,
        })) || [];

        setData({
          trips,
          tickets,
          occupancyRate: res.data.occupancyRate[range] || [],
          revenue: res.data.revenue[range] || [],
        });
      } else {
        console.error("Error fetching dashboard data:", res.error);
      }
      setLoading(false);
    };

    fetchData();
  }, [range]);

  return (
    <div className="space-y-6">
      {/* Filter Dropdown */}
      <div className="flex justify-end">
        <select
          className="border rounded-md px-3 py-2"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="daily">{t("Daily")}</option>
          <option value="weekly">{t("Weekly")}</option>
          <option value="monthly">{t("Monthly")}</option>
          <option value="yearly">{t("Yearly")}</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center">{t("Loading...")}</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tickets Issued */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">{t("ticketsIssued")}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.tickets}>
                <XAxis dataKey="bus_number" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="tickets_generated"
                  fill="#8884d8"
                  name={t("tickets")}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Trips Completed */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">{t("tripsCompleted")}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.trips}>
                <XAxis dataKey="bus_number" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="trips_completed"
                  stroke="#82ca9d"
                  name={t("trips")}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Collected */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">{t("revenueCollected")}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.revenue}>
                <XAxis dataKey="bus_number" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8884d8"
                  name={t("revenue")}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Occupancy Rate */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">{t("occupancyRate")}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.occupancyRate}>
                <XAxis dataKey="bus_number" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="occupancy_rate"
                  fill="#FF8042"
                  name={`${t("occupancy")} %`}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardGraphs;
