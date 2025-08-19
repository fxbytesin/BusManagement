import { Edit, Plus, Route, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import  ApiService from '../../services/api'
// Route Management Page
const RouteManagement = (
  {
    setModalType,
    setShowModal,
    t,
    routes,
    handleEditRoute,
    handleDeleteRoute,
    setRoutes
  }
) => {
  const[loader,setLoader] = useState(true)
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await ApiService.getRoutes();      
        setRoutes(response.data)
      } catch (err) {
      }
      finally {
        setLoader(false)
   }
    }
    getData()
  }, [setRoutes])
  console.log("routes",routes);
  
  return loader ? (
    <div>Loading</div> // You can put a spinner here
  ) : (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">{t("routeManagement")}</h3>
        <button
          onClick={() => {
            setModalType("add-route");
            setShowModal(true);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700"
        >
          <Plus className="w-5 h-5" />
          <span>{t("addNewRoute")}</span>
        </button>
      </div>
  
      {routes.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
          <Route className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {t("noRouteFound")}
          </h3>
          <p className="text-gray-500 mb-4">{t("addFirstRoute")}</p>
          <button
            onClick={() => {
              setModalType("add-route");
              setShowModal(true);
            }}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            {t("addNewRoute")}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {routes?.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-lg shadow-sm border p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold">{route.name}</h4>
                  <p className="text-gray-600">
                    {t("code")}: {route.code}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEditRoute(route)}
                    className="text-blue-600 hover:text-blue-900 p-1"
                    title={t("edit")}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteRoute(route.id)}
                    className="text-red-600 hover:text-red-900 p-1"
                    title={t("delete")}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
  
              <div className="space-y-2 mb-4">
                <p>
                  <span className="font-medium">{t("distance")}:</span>{" "}
                  {route.distance} {t("km")}
                </p>
                <p>
                  <span className="font-medium">{t("baseFare")}:</span>{" "}
                  {t("rupees")}
                  {route.base_fare}
                </p>
                <p>
                  <span className="font-medium">{t("perKmRate")}:</span>{" "}
                  {t("rupees")}
                  {route.per_km_rate}
                </p>
              </div>
  
              <div>
  <p className="font-medium mb-2">{t("stops")}:</p>
  <div className="flex flex-wrap gap-2">
    {(
      Array.isArray(route.stops)
        ? route.stops
        : JSON.parse(route.stops) // parse JSON string into array
    ).map((stop, index) => (
      <span
        key={index}
        className="bg-gray-100 px-2 py-1 rounded text-sm"
      >
        {stop}
      </span>
    ))}
  </div>
</div>

  
              <div className="mt-4 pt-4 border-t">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${route.active
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                    }`}
                >
                  {t(route.active ? "active" : "inactive")}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );  
};
  
export default RouteManagement
