import { Edit, Plus, Trash2, Users ,Loader} from 'lucide-react';
import { useEffect, useState } from 'react';
import ApiService from '../../services/api';
import SortColumn from './SortColumn';
import DataPagination from './DataPagination';

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
  const [loading, setLoading] = useState(true); 
  const [search, setSearch] = useState("");
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "name",
    direction: "ASC",
  }); 
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);


  const getData = async () => {
    const body = {
      search : search,
      limit: 10,
      page: page,
      order: sortDescriptor.direction,
      orderColumn : sortDescriptor.column
    }
    try {
      setLoading(true)
      const response = await ApiService.getConductor(body);    
      if (response?.success === true) {
        setConductors(response?.data?.data)
        setTotalPages(response?.data?.pagination?.totalPages)
      }
    } catch (err) {
    }
    finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search,sortDescriptor,page])

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
    <div className="p-6">
    <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">{t("conductorManagement")}</h3>
        
        <div className='flex'>
        <form className="flex max-w-lg mx-auto mr-6">   
              <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search..."
               onChange={handleChange}
              />
       
          </form>
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
    </div>

    {conductors?.length === 0 ? (
      <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
        <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {t("noConductorFound")}
        </h3>
      </div>
    ) : (
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  onClick={() => handleSorting("name")}
                  >
                    <div className='flex'>
                      {t("name")}
                      <SortColumn
                        sortDescriptor={sortDescriptor}
                        name="name"
                        />
                      </div>
              </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                     onClick={() => handleSorting("phone")}
                  >
                    <div className='flex'>
                    {t("phone")}
                    <SortColumn
                      sortDescriptor={sortDescriptor}
                      name="phone"
                      />
                      </div>
              </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                   onClick={() => handleSorting("experience_years")}
                  >
                  <div className='flex'>
                    {t("experience")}
                    
                    <SortColumn
                      sortDescriptor={sortDescriptor}
                      name="experience_years"
                      />
                      </div>
              </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className='flex'>
                      {t("actions")}
                      </div>
              </th>
            </tr>
          </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                <Loader/>
                ) : conductors?.length > 0 ? (
                  conductors?.map((conductor) => {
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
                                    buses?.map((bus) =>
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
                  })
                  ) : (
                    <tr>
                    <td
                      colSpan={4}
                      className="py-10 text-center text-gray-500"
                    >
                       {t("No Data Found")}
                    </td>
                  </tr>
                )
                }
          </tbody>
            </table>
            {conductors && conductors.length > 0 && (
                  <DataPagination
                    onPageChange={handlePageChange}
                    totalPages={totalPages}
                    currentPage={page}
                  />
                )}
      </div>
    )}
  </div>
  )
};
  
export default ConductorManagement