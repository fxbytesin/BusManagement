import { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from "recharts";
import ApiService from "../../services/api"; // ✅ apni API service import karo

const DashboardGraphs = ({ t }) => {
  const [range, setRange] = useState("daily"); // daily | weekly | monthly | yearly
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // ✅ API se data fetch
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // API call me payload bhejna
        const res = await ApiService.getDashboard({ range }); 
        if (res.success) {
          setDashboardData(res.data);
        } else {
          setDashboardData(null);
        }
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setDashboardData(null);
      }
      setLoading(false);
    };
    fetchData();
  }, [range]);

  if (loading) return <p>Loading...</p>;
  if (!dashboardData) return <p>No data available</p>;

  // 👇 Utility: X-axis key decide karna based on range
  const getXAxisKey = () => {
    if (range === "daily") return "date";
    if (range === "weekly") return "week";
    if (range === "monthly") return "month";
    if (range === "yearly") return "year";
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tickets Issued */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">{t("ticketsIssuedPerDay")}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dashboardData.tickets || []}>
              <XAxis dataKey={getXAxisKey()} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Bus1" fill="#8884d8" />
              <Bar dataKey="Bus2" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Collected */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">{t("revenueCollectedPerDay")}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dashboardData.revenue || []}>
              <XAxis dataKey={getXAxisKey()} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Bus1" stroke="#8884d8" />
              <Line type="monotone" dataKey="Bus2" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Occupancy Rate */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">{t("occupancyRate")}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dashboardData.occupancy || []}>
              <XAxis dataKey="bus" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="occupancy" fill="#FF8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Trips Completed */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">{t("tripsCompletedPerDay")}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dashboardData.trips || []}>
              <XAxis dataKey={getXAxisKey()} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Bus1" stroke="#8884d8" />
              <Line type="monotone" dataKey="Bus2" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Payment Mode Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow-sm border col-span-1 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">{t("paymentModeBreakdown")}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dashboardData.paymentModes || []}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {(dashboardData.paymentModes || []).map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardGraphs;
