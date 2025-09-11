import {
  Bus,
  Users,
  IndianRupee,
  Plus,
} from "lucide-react";
import { useEffect, useState } from "react";
import ApiService from "../../services/api";
import DashboardGraphs from "./DashboardGraph";

const DashboardPage = ({ setModalType, setShowModal, t, dashboard, setDashboard }) => {
  // Local state for active & total buses
  const [activeBuses, setActiveBuses] = useState(0);
  const [totalBuses, setTotalBuses] = useState(0);

  // 🔹 Fetch Dashboard (revenue, trips, tickets etc.)
  const fetchDashboardData = async () => {
    try {
      const response = await ApiService.getDashboard();
      setDashboard(response?.data || {});
    } catch (err) {
      console.error("Error fetching dashboard:", err);
    }
  };

  // 🔹 Fetch Active & Total Buses
  const fetchBusStats = async () => {
    try {
      const response = await ApiService.getActiveBus();
      setActiveBuses(response?.data?.active_buses_count || 0);
      setTotalBuses(response?.data?.total_buses || 0);
    } catch (err) {
      console.error("Error fetching bus stats:", err);
    }
  };

  // 🔹 Run effects on mount
  useEffect(() => {
    fetchDashboardData();
    fetchBusStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 🔹 Today’s data (daily)
  const todayRevenue = dashboard?.revenue?.daily?.reduce(
    (sum, bus) => sum + Number(bus.revenue || 0),
    0
  );

  const todayPassengers = dashboard?.tripsAndTickets?.daily?.reduce(
    (sum, bus) => sum + Number(bus.tickets_generated || 0),
    0
  );

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">{t("todayRevenue")}</p>
              <p className="text-3xl font-bold text-green-600">
                {t("rupees")}
                {todayRevenue}
              </p>
            </div>
            <IndianRupee className="w-12 h-12 text-green-500" />
          </div>
        </div>

        {/* Passengers */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">{t("totalPassengers")}</p>
              <p className="text-3xl font-bold text-blue-600">
                {todayPassengers}
              </p>
            </div>
            <Users className="w-12 h-12 text-blue-500" />
          </div>
        </div>

        {/* Active / Total Buses */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">{t("activeBuses")}</p>
              <p className="text-3xl font-bold text-purple-600">
                {activeBuses} / {totalBuses}
              </p>
            </div>
            <Bus className="w-12 h-12 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">{t("quickActions")}</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setModalType("add-bus");
                setShowModal(true);
              }}
              className="bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700"
            >
              <Plus className="w-5 h-5" />
              <span>{t("addNewBus")}</span>
            </button>
            <button
              onClick={() => {
                setModalType("add-route");
                setShowModal(true);
              }}
              className="bg-green-600 text-white p-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-700"
            >
              <Plus className="w-5 h-5" />
              <span>{t("addNewRoute")}</span>
            </button>
            <button
              onClick={() => {
                setModalType("add-user");
                setShowModal(true);
              }}
              className="bg-purple-600 text-white p-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-700"
            >
              <Plus className="w-5 h-5" />
              <span>{t("addNewUser")}</span>
            </button>
          </div>
        </div>

        {/* Today Bus Status */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">{t("todayBusStatus")}</h3>
          <div className="space-y-3 overflow-y-auto" style={{ maxHeight: '136px' }}>
            {dashboard?.revenue?.daily?.map((bus, idx) => {
              // Find occupancy info for same bus_id
              const occupancyInfo = dashboard?.occupancyRate?.daily?.find(
                (occ) => occ.bus_id === bus.bus_id
              );

              return (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2 border-b last:border-b-0"
                >
                  <div>
                    <p className="font-medium">{bus.bus_number}</p>
                    <p className="text-sm text-gray-600">
                      {t("capacity")}: {occupancyInfo?.capacity || "-"} |{" "}
                      {t("bookedSeats")}: {occupancyInfo?.booked_seats || 0}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">
                      {t("rupees")}
                      {bus.revenue || 0}
                    </p>
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      {t("occupancy")}: {occupancyInfo?.occupancy_rate || "0"}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Graphs Section */}
      <DashboardGraphs t={t} />
    </div>
  );
};

export default DashboardPage;
