// Dashboard Page
import {
  Bus,
  Users,
  IndianRupee,
  Plus,
} from "lucide-react";
import { useEffect } from "react";
import ApiService from "../../services/api";
import DashboardGraphs from "./DashboardGraph";

const DashboardPage = ({ setModalType, setShowModal, t, dashboard, setDashboard }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await ApiService.getDashboard();
        setDashboard(response?.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 🟢 Today data (daily)
  const todayRevenue = dashboard?.revenue?.daily?.reduce(
    (sum, bus) => sum + Number(bus.revenue || 0),
    0
  );

  const todayPassengers = dashboard?.tripsAndTickets?.daily?.reduce(
    (sum, bus) => sum + Number(bus.tickets_generated || 0),
    0
  );

  const activeBuses = dashboard?.tripsAndTickets?.daily?.filter(
    (bus) => bus.trips_completed > 0
  ).length;

  const totalBuses = dashboard?.tripsAndTickets?.daily?.length || 0;

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">
            {t("todayBusStatus")}
          </h3>
          <div className="space-y-3">
            {dashboard?.revenue?.daily?.map((bus, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-2 border-b last:border-b-0"
              >
                <div>
                  <p className="font-medium">{bus.bus_number}</p>
                  <p className="text-sm text-gray-600">
                    {t("capacity")}: {bus.capacity || "-"} |{" "}
                    {t("bookedSeats")}: {bus.booked_seats || 0}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm">
                    {t("rupees")}
                    {bus.revenue || 0}
                  </p>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    {t("occupancy")}: {bus.occupancy_rate || "0"}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Graphs Section */}
      <DashboardGraphs t={t} />
    </div>
  );
};

export default DashboardPage;
