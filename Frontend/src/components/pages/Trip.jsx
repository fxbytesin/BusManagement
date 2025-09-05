import React, { useEffect, useState } from 'react'
import ApiService from '../../services/api';
import { Edit, Trash2, SquareEqual, Plus } from 'lucide-react';
import TicketSystem from './TicketSystem';
import DataPagination from './DataPagination';
import SortColumn from './SortColumn';
import ToastMessage from './ToastMessage';
const Trip = ({
  buses,
  routes,
  conductors,
  drivers,
  t,
  setBuses,
  setRoutes,
  setDrivers,
  setConductors,
  showTrip,
  setShowTrip
}) => {

  const [tripForm, setTripForm] = useState({
    bus_id: "",
    route_id: "",
    driver_id: "",
    conductor_id: "",
    status: "",
    start_time: "",
    end_time: "",
  });
  const [trip, setTrip] = useState([])
  const [isPost, setIsPost] = useState(true)
  const [editId, setEditId] = useState(0)
  const [showTicket, setShowTicket] = useState(true) 
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [busCapacity, setBusCapacity] = useState(0)
  const [search, setSearch] = useState("");
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "bus_number",
    direction: "ASC",
  }); 
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  
  const getData = async () => {
    const body = {
      search : search,
      limit: 10,
      page: page,
      order: sortDescriptor.direction,
      orderColumn : sortDescriptor.column
    }
    try {
      const response = await ApiService.getTrip(body);
      if (response?.success === true) {         
        setTrip(response?.data?.data)
        setTotalPages(response?.data?.pagination?.totalPages)
      }
    } catch (err) {
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search,page,sortDescriptor])

  useEffect(() => {
    if (!showTrip) {
    setErrors({})
  }
},[showTrip])
  const getBusData = async () => {
    const body = {
      search : search,
      limit: 10,
      page: page,
      order: sortDescriptor.direction,
      orderColumn : sortDescriptor.column
    }
    try {
      const response = await ApiService.getBus(body);      
      setBuses(response?.data?.data)
      setTotalPages(response?.data?.pagination?.totalPages)
    }
    catch (err) {
      
    }
    finally {
    }
  }


  const getRoutesData = async () => {
    const body = {
      search : search,
      limit: 10,
      page: page,
      order: sortDescriptor.direction,
      orderColumn : sortDescriptor.column
    }
    try {
      const response = await ApiService.getRoutes(body);      
      setRoutes(response?.data?.data)
    }
    catch (err) {
      
    }
    finally {
      
    }
  }
  
  const getDriverData = async () => {
    const body = {
      search : search,
      limit: 10,
      page: page,
      order: sortDescriptor.direction,
      orderColumn : sortDescriptor.column
    }
    try {
      const response = await ApiService.getDriver(body);      
      setDrivers(response?.data?.data)
    }
    catch (err) {
      
    }
    finally {
    }
  }
  
  const getConductorData = async () => {
    const body = {
      search : search,
      limit: 10,
      page: page,
      order: sortDescriptor.direction,
      orderColumn : sortDescriptor.column
    }
    try {
      const response = await ApiService.getConductor(body);      
      setConductors(response?.data?.data)
    }
    catch (err) {
      
    }
    finally {
    }
}

useEffect(() => {
  getRoutesData()
  getDriverData()
  getConductorData()
  getBusData()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  const status = [
    "SCHEDULED",
    "RUNNING",
    "COMPLETED",
    "CANCELLED"
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
  
    if (!tripForm.bus_id) {
      newErrors.bus_id = "Bus is required.";
    }
    if (!tripForm.route_id) {
      newErrors.route_id = "Route is required.";
    }
    if (!tripForm.driver_id) {
      newErrors.driver_id = "Driver is required.";
    }
    if (!tripForm.conductor_id) {
      newErrors.conductor_id = "Base fare is required.";
    }
    if (!tripForm.start_time) {
      newErrors.start_time = "Km rate is required.";
    }
      if (!tripForm.end_time) {
      newErrors.end_time = "Km rate is required.";
    }
    
    setErrors(newErrors);
  
    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) return;

    if (isPost) {
      const payload = {
        bus_id: parseInt(tripForm.bus_id, 10),
        route_id: parseInt(tripForm.route_id, 10),
        driver_id: tripForm.driver_id ? parseInt(tripForm.driver_id, 10) : null,
        conductor_id: tripForm.conductor_id ? parseInt(tripForm.conductor_id, 10) : null,
        start_time: new Date(tripForm.start_time).toISOString(), // convert to UTC ISO
        end_time: new Date(tripForm.end_time).toISOString(),
        status: tripForm.status,
      };
      const response = await ApiService.createTrip(payload)
      if (response?.data) {
        getData()
        setToastMessage("Trip Add Successfully");
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000);
      }

    }
    else {

      const payload = {
        ...tripForm,
        bus_id: parseInt(tripForm.bus_id, 10),
        route_id: parseInt(tripForm.route_id, 10),
        driver_id: parseInt(tripForm.driver_id, 10),
        conductor_id: parseInt(tripForm.conductor_id, 10),
        // convert datetime-local back to ISO for API
        start_time: new Date(tripForm.start_time).toISOString(),
        end_time: new Date(tripForm.end_time).toISOString(),
      };

      const response = await ApiService.updateTrip(payload, editId);
      if (response?.success === true) {
        setToastMessage("Trip Update Successfully");
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000);
        getData()
      }
      else {
      }
    }

    setTripForm({
      bus_id: "",
      route_id: "",
      driver_id: "",
      conductor_id: "",
      status: "",
      start_time: "",
      end_time: "",
    })
    setShowTrip(false)
  };

  const handleDelete = async (obj) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this trip?");
    if (!confirmDelete) return; // 
    try {
      const response = await ApiService.deleteTrip(obj?.id);
      if (response?.data?.message === "Trip deleted successfully") {
        // remove deleted trip from UI              
        setShowToast(true)
        setToastMessage("Pos Machine Deleted Successfully")
        setTimeout(() => setShowToast(false), 3000);
        setTrip((prevTrips) => prevTrips.filter((trip) => trip.id !== obj.id));
      }
    } catch (error) {
    }
  };


  const formatDateTimeLocal = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    // toISOString gives full UTC, so we cut seconds & "Z"
    return date.toISOString().slice(0, 16);
  };

  const handleEdit = (obj) => {    
    setTripForm({
      bus_id: obj.bus_id,
      route_id: obj.route_id,
      driver_id: obj.driver_id,
      conductor_id: obj.conductor_id,
      status: obj.status,
      start_time: formatDateTimeLocal(obj.start_time),
      end_time: formatDateTimeLocal(obj.end_time),

    })
    setIsPost(false)
    setShowTrip(true)
    setEditId(obj?.id)
  }

  const handleClose = () => {
    setShowTrip(false)
    setTripForm({
      bus_id: "",
      route_id: "",
      driver_id: "",
      conductor_id: "",
      status: "",
      start_time: "",
      end_time: "",
    })
    setIsPost(true)
  }

  const handleChange = (e) => {
    setSearch(e.target.value); 
  }
  const handlePageChange = (page) => {
    setPage(page); // Update the page state variable to the specified page number
  };

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
  return (
    
    showTrip ?
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  {t("Bus")} *
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.bus_id}
                  onChange={(e) => {
                    setTripForm({ ...tripForm, bus_id: e.target.value })
                    if (errors.bus_id) {
                      setErrors({ ...errors, bus_id: "" });
                    }
                  }
                  }
                >
                  <option value="">{t("busNumber")}</option>
                  {buses?.map((buses) => (
                    <option key={buses.id} value={buses.id}>
                      {buses.bus_number}
                    </option>
                  ))}
                </select>
                {errors.bus_id && (
                  <p className="text-red-500 text-sm mt-1 text-left">{errors.bus_id}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  {t("Route")} *
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.route_id}
                  onChange={(e) => {
                    setTripForm({ ...tripForm, route_id: e.target.value })
                    if (errors.route_id) {
                      setErrors({ ...errors, route_id: "" });
                    }
                  }
                  }
                >
                  <option value="">{t("selectRoute")}</option>
                  {routes?.map((route) => (
                    <option key={route.id} value={route.id}>
                      {route.name}
                    </option>
                  ))}
                </select>
                {errors.route_id && (
                  <p className="text-red-500 text-sm mt-1 text-left">{errors.route_id}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  {t("Driver")}
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.driver_id}
                  onChange={(e) => {
                    setTripForm({ ...tripForm, driver_id: e.target.value })
                    if (errors.driver_id) {
                      setErrors({ ...errors, driver_id: "" });
                    }
                  }
                  }
                >
                  <option value="">{t("selectDriver")}</option>
                  {drivers?.map((driver) => (
                    <option key={driver.id} value={driver.id}>
                      {driver.name}
                    </option>
                  ))}
                </select>
                {errors.driver_id && (
                  <p className="text-red-500 text-sm mt-1 text-left">{errors.driver_id}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  {t("Conductor")}
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.conductor_id}
                  onChange={(e) => {
                    setTripForm({ ...tripForm, conductor_id: e.target.value })
                    if (errors.conductor_id) {
                      setErrors({ ...errors, conductor_id: "" });
                    }
                  }
                  }
                >
                  <option value="">{t("selectConductor")}</option>
                  {conductors?.map((conductor) => (
                    <option key={conductor.id} value={conductor.id}>
                      {conductor.name}
                    </option>
                  ))}
                </select>
                {errors.conductor_id && (
                  <p className="text-red-500 text-sm mt-1 text-left">{errors.conductor_id}</p>
                )}
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  {t("Start Time")}
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.start_time}
                  onChange={(e) => {
                    setTripForm({ ...tripForm, start_time: e.target.value })
                  }
                  }
                />
                  {errors.start_time && (
                  <p className="text-red-500 text-sm mt-1 text-left">{errors.start_time}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  {t("End Time")}
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.end_time}
                  onChange={(e) => {
                    setTripForm({ ...tripForm, end_time: e.target.value })
                  }
                  }
                />
                    {errors.end_time && (
                  <p className="text-red-500 text-sm mt-1 text-left">{errors.end_time}</p>
                )}
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  {t("Status")}
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.status}
                  onChange={(e) =>
                    setTripForm({ ...tripForm, status: e.target.value })
                  }
                >
                  {status?.map((status, index) => (
                    <option key={index}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>


              <div className="flex justify-end space-x-2 pt-4">
                <button
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                  onClick={handleClose}
                >
                  {t("cancel")}
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  type="submit"
                >
                  {t("save")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      : (
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          {showTicket ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold ml-5">{t("trip")}</h3>

             <div className='flex'>
                <form className="flex max-w-lg mx-auto mr-6 mt-[19px]">   
                   <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search..."
                   onChange={handleChange}
                />
         
                  </form>
                <button
                 onClick={() => setShowTrip(true)}
                 className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 mr-5 mt-5"
                 >
              <Plus className="w-5 h-5" />
              <span>{t("addTrip")}</span>
                </button>
            </div>

          </div>
            <table className="w-full">           
              <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={() => handleSorting("bus_id")}
                    >
                      {("Bus Number")}
                      <SortColumn
                      sortDescriptor={sortDescriptor}
                      name="bus_id"
                      />
                  </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={() => handleSorting("conductor_id")}
                    >
                      <div className='flex'>
                      {("Conductor Name")}
                      <SortColumn
                        sortDescriptor={sortDescriptor}
                        name="conductor_id"
                        />
                        </div>
                  </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={() => handleSorting("driver_id")}
                    >
                      <div className='flex'>
                      {("Driver Name")}
                      <SortColumn
                        sortDescriptor={sortDescriptor}
                        name="driver_id"
                        />
                        </div>
                  </th>

                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={() => handleSorting("route_id")}
                    >  
                      <div className='flex'>
                      {("Route")}
                      <SortColumn
                        sortDescriptor={sortDescriptor}
                        name="route_id"
                        />
                      </div>
                      
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {("Start Time")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {("End Time")}
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {("Status")}
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {("Action")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {trip && trip.length > 0 ? (
                trip.map((trip) => (
                  <tr key={trip.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-left">
                      {trip.bus_number}
                    </td>
            
                    <td className="px-6 py-4 whitespace-nowrap text-left">
                      {trip?.conductor_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-left">
                      {trip?.driver_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-left">
                      {trip?.route_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-left">
                      {trip?.start_time
                        ? new Date(trip.start_time).toLocaleString("en-IN", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })
                        : ""}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-left">
                      {trip?.end_time
                        ? new Date(trip.end_time).toLocaleString("en-IN", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })
                        : ""}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-left">
                      {trip?.status}
                    </td>
                    <td>
                      <div className="flex items-center space-x-2">
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          title={t("edit")}
                          onClick={() => handleEdit(trip)}
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900"
                          title={t("delete")}
                          onClick={() => handleDelete(trip)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button>
                          <SquareEqual
                            className="w-4 h-4"
                            onClick={() => {
                              setShowTicket(false);
                              setSelectedTripId(trip.id);
                              setBusCapacity(trip?.bus_capacity);
                            }}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="px-6 py-4 text-center text-gray-500 font-medium"
                  >
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
            
              </table>
              {conductors && conductors.length > 0 && (
                <DataPagination
                  onPageChange={handlePageChange}
                  totalPages={totalPages}
                  currentPage={page}
                />
              )}
              {showToast && (
                <ToastMessage
                setShowToast={setShowToast}
                toastMessage={toastMessage}
              />
           )
           }
              </div>
          ) : (
              <div>
                <TicketSystem
                  tripId={selectedTripId}
                  busCapacity={busCapacity}
                />
              </div>
          )}          
        </div>
      )
  )
}

export default Trip