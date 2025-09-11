import { Bus, Edit, Plus, Trash2, Loader, } from 'lucide-react';
import { useEffect, useState } from 'react';
import ApiService from '../../services/api';
import TicketView from './TicketView';
import SortColumn from './SortColumn';
import DataPagination from './DataPagination';

// Bus Management Page
const BusManagementPage = (
  {
    buses,
    setModalType,
    setShowModal,
    t,
    handleEditBus,
    handleDeleteBus,
    setBuses,
    setRoutes,
    setDrivers,
    setConductors
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const [showComponent, setShowComponent] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [busId, setBusId] = useState(0)
  const [loading, setLoading] = useState(true);


  const [search, setSearch] = useState("");
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "name",
    direction: "ASC",
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);


  const getBusData = async () => {
    const body = {
      search: search,
      limit: 10,
      page: page,
      order: sortDescriptor.direction,
      orderColumn: sortDescriptor.column
    }
    try {
      setLoading(true);
      const response = await ApiService.getBus(body);
      setBuses(response?.data?.data)
      setTotalPages(response?.data?.pagination?.totalPages)
    }
    catch (err) {

    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBusData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setBuses, search, page, sortDescriptor])


  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSorting = (column) => {
    setSortDescriptor((prevDescriptor) => {
      if (prevDescriptor.column === column) {
        return {
          ...prevDescriptor,
          direction:
            prevDescriptor.direction === "ASC"
              ? "DESC"
              : "ASC",
        };
      } else {
        return {
          column: column,
          direction: "DESC",
        };
      }
    });
  };


  const handlePageChange = (page) => {
    setPage(page); // Update the page state variable to the specified page number
  };
  return (
    showComponent ? (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">{t("busManagement")}</h3>

          <div className='flex'>
            <form class="flex max-w-lg mx-auto mr-6">
              <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder={t("searchPlaceholder")}

                onChange={handleChange}
              />

            </form>
            <button
              onClick={() => {
                setModalType("add-bus");
                setShowModal(true);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-500"
            >
              <Plus className="w-5 h-5" />
              <span>{t("addNewBus")}</span>
            </button>
          </div>
        </div>

        {buses?.length === 0 ? (
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
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-500"
            >
              {t("addNewBus")}
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-x font-bold text-gray-500 uppercase tracking-wider"
                    onClick={() => handleSorting("bus_number")}
                  >
                    <div className='flex'>
                      {t("busNumber")}
                      <SortColumn
                        sortDescriptor={sortDescriptor}
                        name="bus_number"
                      />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-x font-bold text-gray-500 uppercase tracking-wider"
                    onClick={() => handleSorting("capacity")}
                  >
                    <div className='flex'>
                      {t("capacity")}
                      <SortColumn
                        sortDescriptor={sortDescriptor}
                        name="capacity"
                      />
                    </div>

                  </th>


                  <th className="px-6 py-3 text-left text-x font-bold text-gray-500 uppercase tracking-wider"
                    onClick={() => handleSorting("insurance_expiry")}
                  >
                    <div className='flex'>
                      {t("insuranceExpiry")}
                      <SortColumn
                        sortDescriptor={sortDescriptor}
                        name="insurance_expiry"
                      />
                    </div>
                  </th>

                  <th className="px-6 py-3 text-left text-x font-bold text-gray-500 uppercase tracking-wider"
                    onClick={() => handleSorting("permit_expiry")}
                  >
                    <div className='flex'>
                      {t("permitExpiry")}
                      <SortColumn
                        sortDescriptor={sortDescriptor}
                        name="permit_expiry"
                      />
                    </div>

                  </th>
                  <th className="px-6 py-3 text-left text-x font-bold text-gray-500 uppercase tracking-wider"
                    onClick={() => handleSorting("last_maintenance")}
                  >
                    <div className='flex'>
                      {t("lastMaintenance")}
                      <SortColumn
                        sortDescriptor={sortDescriptor}
                        name="last_maintenance"
                      />
                    </div>
                  </th>


                  <th className="px-6 py-3 text-left text-x font-bold text-gray-500 uppercase tracking-wider">
                    {t("actions")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={9} className="py-10">
                      <div className="flex justify-center items-center w-full">
                        <Loader />
                      </div>
                    </td>
                  </tr>
                ) : buses?.length > 0 ? (
                  buses.map((bus) => (
                    <tr key={bus.id}>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">
                        {bus.bus_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {bus.capacity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(bus.insurance_expiry).toLocaleDateString("en-US")}

                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(bus.permit_expiry).toLocaleDateString("en-US")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(bus.last_maintenance).toLocaleDateString("en-US")}
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
                              if (window.confirm(t("confirmDeleteBus"))) {
                                handleDeleteBus(bus.id);
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
                  ))
                ) : (
                  <tr>
                    <td colSpan={9} className="py-10 text-center text-gray-500">
                      {t("noDataFound")}
                    </td>
                  </tr>
                )}
              </tbody>


            </table>
            {buses && buses.length > 0 && (
              <DataPagination
                onPageChange={handlePageChange}
                totalPages={totalPages}
                currentPage={page}
              />
            )}
          </div>
        )}
      </div>
    ) : (
      <>
        <TicketView busId={busId} />
      </>
    )

  )
};

export default BusManagementPage