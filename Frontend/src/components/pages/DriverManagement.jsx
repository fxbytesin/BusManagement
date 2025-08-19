import { Edit, Plus, Trash2, User } from 'lucide-react';
import { useEffect } from 'react';
import ApiService from '../../services/api';

const DriverManagement = ({
  setModalType,
  setShowModal,
  t,
  drivers,
  buses,
  setBuses,
  setDrivers,
  handleEditDriver,
  handleDeleteDriver
}) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await ApiService.getDriver();      
        setDrivers(response.data)
      } catch (err) {
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
  <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-semibold">{t("driverManagement")}</h3>
      <button
        onClick={() => {
          setModalType("add-driver");
          setShowModal(true);
        }}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700"
      >
        <Plus className="w-5 h-5" />
        <span>{t("addNewDriver")}</span>
      </button>
    </div>

    {drivers.length === 0 ? (
      <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
        <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {t("noDriverFound")}
        </h3>
        <p className="text-gray-500 mb-4">{t("addFirstDriver")}</p>
        <button
          onClick={() => {
            setModalType("add-driver");
            setShowModal(true);
          }}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
        >
          {t("addNewDriver")}
        </button>
      </div>
    ) : (
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("name")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("phone")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("license")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("experience")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("assignedBus")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("actions")}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {drivers.map((driver) => {
              const assignedBus = buses.find(
                (bus) => bus.driverId === driver.id
              );
              return (
                <tr key={driver.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    {driver.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {driver.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {driver.license_number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {driver.experience_years}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {assignedBus ? assignedBus.number : t("notAssigned")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        onClick={()=>handleEditDriver(driver)}
                        title={t("edit")}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          // eslint-disable-next-line no-restricted-globals
                          if (confirm(t("confirmDeleteDriver"))) {
                            handleDeleteDriver(driver.id)
                            setDrivers(
                              drivers.filter((d) => d.id !== driver.id)
                            );
                            setBuses(
                              buses.map((bus) =>
                                bus.driverId === driver.id
                                  ? { ...bus, driverId: "" }
                                  : bus
                              )
                            );
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
              );
            })}
          </tbody>
        </table>
      </div>
    )}
    </div>
  )
};
  
export default DriverManagement