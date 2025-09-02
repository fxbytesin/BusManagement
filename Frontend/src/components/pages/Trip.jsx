import React, { useEffect, useState } from 'react'
import ApiService from '../../services/api';
import { Edit, Trash2,SquareEqual } from 'lucide-react';
import { useNavigate } from "react-router-dom";
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
        end_time:"",
     });
    const [trip, setTrip] = useState([])
    const [isPost, setIsPost] = useState(true)
    const [editId, setEditId] = useState(0)
  
     useEffect(() => {
        const getData = async () => {
          try {
            const response = await ApiService.getTrip(); 
            if (response?.success === true) {
                console.log("response",response);
                setTrip(response?.data?.trips)
              }            
          } catch (err) {
          }
        }
        getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

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
    }, [])
    

    const status = [
        "SCHEDULED",
        "RUNNING",
        "COMPLETED",
        "CANCELLED"
    ]

    const handleSubmit = async(e) => {
        e.preventDefault();
    
        if (!tripForm.bus_id) {
          alert("Please select a bus");
          return;
        }
        if (!tripForm.route_id) {
          alert("Please select a route");
          return;
        }
        if (!tripForm.start_time || !tripForm.end_time) {
          alert("Please select start and end time");
          return;
        }
       
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
                const response = await ApiService.getTrip();
                setTrip(response.data);
                alert("Trip saved successfully");
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
                alert("Trip Updated successfully ");
                const response = await ApiService.getTrip();
                setTrip(response.data);
            }
            else {
                alert("Trip Updated Fail ");
            }    
        }
  
        setTripForm({
            bus_id: "",
            route_id: "",
            driver_id: "",
            conductor_id: "",
            status: "",
            start_time: "",
            end_time:"",
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
            setTrip((prevTrips) => prevTrips.filter((trip) => trip.id !== obj.id));
          }
        } catch (error) {
          console.error("Delete failed:", error);
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
            bus_id: obj.bus.id,
            route_id: obj.route.id,
            driver_id: obj.driver.id,
            conductor_id: obj.conductor.id,
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
      end_time:"",
    })
    setIsPost(true)
  }
  const navigate = useNavigate();

  console.log("trip",trip);
  
  return (
    showTrip ? 
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
      <form  onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                {t("Bus")} *
              </label>  
              <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.bus_id}
                  onChange={(e) =>
                    setTripForm({ ...tripForm, bus_id: e.target.value })
                  }                
              >
                <option value="">{t("busNumber")}</option>
                {buses?.map((buses) => (
                  <option key={buses.id} value={buses.id}>
                    {buses.bus_number}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                {t("Route")} *
              </label>
              <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.route_id}
                  onChange={(e) =>
                    setTripForm({ ...tripForm, route_id: e.target.value })
                  }
              >
                <option value="">{t("selectRoute")}</option>
                {routes?.map((route) => (
                  <option key={route.id} value={route.id}>
                    {route.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                {t("Driver")}
              </label>
              <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.driver_id}
                  onChange={(e) =>
                    setTripForm({ ...tripForm, driver_id: e.target.value })
                  }
              >
                <option value="">{t("selectDriver")}</option>
                {drivers?.map((driver) => (
                  <option key={driver.id} value={driver.id}>
                    {driver.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                {t("Conductor")}
              </label>
              <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.conductor_id}
                  onChange={(e) =>
                    setTripForm({ ...tripForm, conductor_id: e.target.value })
                  }
              >
                <option value="">{t("selectConductor")}</option>
                {conductors?.map((conductor) => (
                  <option key={conductor.id} value={conductor.id}>
                    {conductor.name}
                  </option>
                ))}
              </select>
            </div>

         
            <div>
  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
    {t("Start Time")}
  </label>
  <input
    type="datetime-local"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.start_time}
                  onChange={(e) =>
                    setTripForm({ ...tripForm, start_time: e.target.value })
                  }
  />
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
    {t("End Time")}
  </label>
  <input
    type="datetime-local"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={tripForm.end_time}
                  onChange={(e) =>
                    setTripForm({ ...tripForm, end_time: e.target.value })
                  }
  />
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
                {status?.map((status,index) => (
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
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {("Bus Number")}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {("Conductor Name")}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {("Driver Name")}
                                </th>
                                
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {("Route")}
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
                    {trip?.map((trip) => (
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
                          ? new Date(trip.start_time).toLocaleString("en-IN", {
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
                        onClick={()=>handleEdit(trip)}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                                        title={t("delete")}
                                        onClick={()=>handleDelete(trip)}
                      >
                        <Trash2 className="w-4 h-4" />
                          </button>
                            <button>
                              <SquareEqual className="w-4 h-4"
                                  onClick={() => navigate("/trips")}
                              />
                            </button>
                    </div>
                      </td>
                      </tr>
                    ))}
                  </tbody>
           </table>
        </div>
     )
  )
}

export default Trip