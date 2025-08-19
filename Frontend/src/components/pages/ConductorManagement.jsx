import { Edit, Plus, Trash2, Users } from 'lucide-react';
import { useEffect } from 'react';
import ApiService from '../../services/api';

const ConductorManagement = ({
  conductors,
  setModalType,
  setShowModal,
  t,
  buses,
  setConductors,
  setBuses,
  setDrivers,
  handleEditConstructor,
  handleDeleteConductor
}) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await ApiService.getConductor();      
        setConductors(response.data)
      } catch (err) {
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-semibold">{t("conductorManagement")}</h3>
      <button
        onClick={() => {
          setModalType("add-conductor");
          setShowModal(true);
        }}
        className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-orange-700"
      >
        <Plus className="w-5 h-5" />
        <span>{t("addNewConductor")}</span>
      </button>
    </div>

    {conductors.length === 0 ? (
      <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
        <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {t("noConductorFound")}
        </h3>
        <p className="text-gray-500 mb-4">{t("addFirstConductor")}</p>
        <button
          onClick={() => {
            setModalType("add-conductor");
            setShowModal(true);
          }}
          className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
        >
          {t("addNewConductor")}
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
            {conductors.map((conductor) => {
              const assignedBus = buses.find(
                (bus) => bus.conductorId === conductor.id
              );
              return (
                <tr key={conductor.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    {conductor.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {conductor.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {conductor.experience_years}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {assignedBus ? assignedBus.number : t("notAssigned")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        title={t("edit")}
                        onClick={()=>handleEditConstructor(conductor)}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          // eslint-disable-next-line no-restricted-globals
                          if (confirm(t("confirmDeleteConductor"))) {
                            handleDeleteConductor(conductor.id)
                            setConductors(
                              conductors.filter((c) => c.id !== conductor.id)
                            );
                            setBuses(
                              buses.map((bus) =>
                                bus.conductorId === conductor.id
                                  ? { ...bus, conductorId: "" }
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
  
export default ConductorManagement