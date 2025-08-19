import { Bus, Edit, Plus, Trash2 } from 'lucide-react';
import { useEffect } from 'react';
import ApiService from '../../services/api';

 // Bus Management Page
const BusManagementPage = (
  {
    buses,
    setModalType,
    setShowModal,
    t,
    routes,
    conductors,
    drivers,
    handleEditBus,
    handleDeleteBus,
    setBuses,
    setRoutes,
    setDrivers,
    setConductors
  }
) => {

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await ApiService.getBus();      
        setBuses(response.data)

        const route = await ApiService.getRoutes();      
        setRoutes(route.data)

        const driver = await ApiService.getDriver();      
        setDrivers(driver.data)

        const conductor = await ApiService.getConductor();      
        setConductors(conductor.data)

      } catch (err) {
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setBuses])
  
  return (
    <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-semibold">{t("busManagement")}</h3>
      <button
        onClick={() => {
          setModalType("add-bus");
          setShowModal(true);
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
      >
        <Plus className="w-5 h-5" />
        <span>{t("addNewBus")}</span>
      </button>
    </div>

    {buses.length === 0 ? (
      <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
        <Bus className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {t("noBusFound")}
        </h3>
        <p className="text-gray-500 mb-4">{t("addFirstBus")}</p>
        <button
          onClick={() => {
            setModalType("add-bus");
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          {t("addNewBus")}
        </button>
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
                {t("driver")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("conductor")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("capacity")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("status")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("current location")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("actions")}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {buses.map((bus) => (
              <tr key={bus.id}>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  {bus.bus_number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {routes.find((r) => r.id === bus.route_id)?.name ||
                    t("notAssigned")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {drivers.find((d) => d.id === bus.driver_id)?.name ||
                    t("notAssigned")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {conductors.find((c) => c.id === bus.conductor_id)?.name ||
                    t("notAssigned")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {bus.capacity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${bus.status === "running"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {t(bus.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  {bus.current_location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEditBus(bus)}
                      className="text-blue-600 hover:text-blue-900"
                      title={t("edit")}
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {                        
                      // eslint-disable-next-line no-restricted-globals
                        if (confirm(t("confirmDeleteBus"))) {
                          handleDeleteBus(bus.id)
                        }
                      }}
                      className="text-red-600 hover:text-red-900"
                      title={t("delete")}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
  )
};
  
export default BusManagementPage