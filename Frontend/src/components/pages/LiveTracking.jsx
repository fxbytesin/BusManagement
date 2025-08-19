import { MapPin } from 'lucide-react';
import { useEffect } from 'react';
import ApiService from '../../services/api';

const LiveTracking = (
  { buses,
    t,
    routes,
    liveTracking,
    setLiveTracking
  }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await ApiService.getLiveTracking();      
        setLiveTracking(response.data)
      } catch (err) {
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  
  return (
    <div className="p-6">
    <h3 className="text-xl font-semibold mb-6">{t("liveTracking")}</h3>
    {liveTracking?.length === 0 ? (
      <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
        <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {t("noTrackingAvailable")}
        </h3>
        <p className="text-gray-500">{t("addBusesFirst")}</p>
      </div>
    ) : (
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("busNumber")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("route")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("currentLocation")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("totalPassengers")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("todayIncome")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("packages")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("status")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("lastUpdate")}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {liveTracking?.map((tracking) => {
              return (
                <tr key={tracking.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    {tracking?.bus_number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {tracking?.route_name || t("notAssigned")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {tracking?.current_location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {tracking?.today_passengers}/{tracking?.capacity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {t("rupees")}
                    {tracking?.today_revenue || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {tracking?.today_packages || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${tracking?.status === "running"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {t(tracking?.status)}
                    </span>
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(bus.lastUpdate).toLocaleTimeString("hi-IN")}
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )}
  </div>
  )
};
  
export default LiveTracking