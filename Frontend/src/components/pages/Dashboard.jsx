// Dashboard Page
import {
    Bus,
    Users,
    IndianRupee,
    Package,
    Plus
} from "lucide-react";
import { useEffect } from 'react';
import ApiService from '../../services/api';

const DashboardPage = ({buses,setModalType,setShowModal,routes,t,dashboard,setDashboard}) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await ApiService.getDashboard();      
        setDashboard(response?.data)        
      } catch (err) {
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    return (
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{t("todayRevenue")}</p>
                <p className="text-3xl font-bold text-green-600">
                  {t("rupees")}
                  {/* {totalRevenue.toLocaleString()} */}
                  {dashboard?.overview?.today_revenue}
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
                  {dashboard?.overview?.today_passengers}
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
                  {dashboard?.overview?.active_buses}/ {dashboard?.overview?.total_buses}
                </p>
              </div>
              <Bus className="w-12 h-12 text-purple-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{t("packages")}</p>
                <p className="text-3xl font-bold text-orange-600">
                  {dashboard?.overview?.today_packages}
                </p>
              </div>
              <Package className="w-12 h-12 text-orange-500" />
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
                  setModalType("add-driver");
                  setShowModal(true);
                }}
                className="bg-purple-600 text-white p-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-700"
              >
                <Plus className="w-5 h-5" />
                <span>{t("addNewDriver")}</span>
              </button>
              <button
                onClick={() => {
                  setModalType("add-conductor");
                  setShowModal(true);
                }}
                className="bg-orange-600 text-white p-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-700"
              >
                <Plus className="w-5 h-5" />
                <span>{t("addNewConductor")}</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">
              {t("todayBusStatus")}
            </h3>
          
              <div className="space-y-3">
                {dashboard?.buses?.map((bus) => (
                  <div
                    key={bus.id}
                    className="flex items-center justify-between py-2 border-b last:border-b-0"
                  >
                    <div>
                      <p className="font-medium">{bus.bus_number}</p>
                      <p className="text-sm text-gray-600">{bus.route_name}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">
                        {t("rupees")}
                        {bus.today_revenue || 0}
                      </p>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          bus.status === "running"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {t(bus.status)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    );
};
  
export default DashboardPage