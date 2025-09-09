import { MapPin ,Loader} from 'lucide-react';
import { useEffect, useState } from 'react';
import ApiService from '../../services/api';

const LiveTracking = (
  { buses,
    t,
    routes,
    liveTracking,
    setLiveTracking
  }) => {
      const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const response = await ApiService.getLiveTracking();      
        setLiveTracking(response.data)
      } catch (err) {
      }
      finally {
        setLoading(false)
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
              <th className="px-6 py-3 text-left text-x font-bold text-gray-500 uppercase tracking-wider">
                {t("busNumber")}
              </th>
              <th className="px-6 py-3 text-left text-x font-bold text-gray-500 uppercase tracking-wider">
                {t("route")}
              </th>
              <th className="px-6 py-3 text-left text-x font-bold text-gray-500 uppercase tracking-wider">
                {t("totalPassengers")}
              </th>
              <th className="px-6 py-3 text-left text-x font-bold text-gray-500 uppercase tracking-wider">
                {t("status")}
              </th>
            </tr>
              </thead>
              
              {loading ? (
                  <tr>
                   <td colSpan={4} className="py-10 text-center">
                     <Loader className="w-6 h-6 animate-spin mx-auto text-gray-500" />
                   </td>
                 </tr>
              ) : liveTracking.length > 0 ? (
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
                        {tracking?.today_passengers}/{tracking?.capacity}
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
                    </tr>
                  );
                })}
              </tbody>
                ): (
                  <tr>
                  <td
                    colSpan={9}
                    className="py-10 text-center text-gray-500 italic"
                  >
                    {t("No Data Found")}
                  </td>
                </tr>
              )
              }
         
        </table>
      </div>
    )}
  </div>
  )
};
  
export default LiveTracking