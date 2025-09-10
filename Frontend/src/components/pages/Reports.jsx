import { BarChart3 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ApiService from '../../services/api';
import ToastMessage from './ToastMessage';

const Reports = ({
    t
}) => {
    const [formData, setFormData] = useState({
        bus_id: "",
        start_time: "",
        end_time: "",
    });
      // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
      // eslint-disable-next-line no-unused-vars
    const [sortDescriptor, setSortDescriptor] = useState({
      column: "bus_number",
      direction: "ASC",
    });
      // eslint-disable-next-line no-unused-vars
    const [page, setPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [totalPages, setTotalPages] = useState(10);
    const [loader, setLoader] = useState(false)
    const [buses, setBuses] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [errors, setErrors] = useState({});
  
  
  
  const getBusData = async () => {
    const body = {
      search: search,
      limit: 10,
      page: page,
      order: sortDescriptor.direction,
      orderColumn: sortDescriptor.column
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

    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoader(true)
         
    let newErrors = {};
  
    if (!formData.bus_id) {
      newErrors.bus_id = "busNumRequired";
    }
    if (!formData.start_time) {
      newErrors.start_time = "startTimeRequired";
    }
    if (!formData.end_time) {
      newErrors.end_time = "endTimeRequired";
    }
     
    setErrors(newErrors);
  
    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) return;


        const payload = {
          bus_id: parseInt(formData.bus_id),
          start_time: formData.start_time,
          end_time: formData.end_time
        };
    try {
      const response = await ApiService.createReport(payload)    
      if (response?.success === true) {
        const blob = new Blob([response.data], { type: "text/csv;charset=utf-8;" });

        // Create a download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "report.csv"); // File name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setShowToast(true)
        setToastMessage("File Created Successfully")
        setTimeout(() => setShowToast(false), 3000);
      }
   
    } catch (err) {
      
    }
    finally {
      setLoader(false)
      setFormData({
        bus_id: "",
        start_time: "",
        end_time: "",
      })
    }
  };
  useEffect(() => {
    getBusData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
    return (
        <div className="p-6">
        <h3 className="text-xl font-semibold mb-6">{t("reports")}</h3>
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
                
            <div className="">

      {/* Filters row */}
      <form
  onSubmit={handleSubmit}
  className="grid grid-cols-12 gap-4 mb-6"
    >                   

  {/* Dropdown */}
  <div className="col-span-12 md:col-span-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">
    {t("busNumber")} *
    </label>
    <select
      name="bus_id"
      value={formData.bus_id}
      onChange={handleChange}
      className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select type</option>
      {
    buses?.map((bus) => (
      <option key={bus.id} value={bus.id}>
        {bus.bus_number}
      </option>
    ))
  }
                </select>
                {errors.bus_id && (
  <p className="text-red-500 text-sm mt-1 text-left">
    {t(errors.bus_id)}
  </p>
)}

  </div>

  {/* Start Date */}
  <div className="col-span-12 md:col-span-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">
    {t("startTime")} *
    </label>
    <input
      type="date"
      name="start_time"
      value={formData.start_time}
      onChange={handleChange}
      className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                  {errors.start_time && (
                  <p className="text-red-500 text-sm mt-1 text-left">{t(errors.start_time)}</p>
                )}
  </div>

  {/* End Date */}
  <div className="col-span-12 md:col-span-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">
    {t("endTime")} *
    </label>
    <input
      type="date"
      name="end_time"
      value={formData.end_time}
      onChange={handleChange}
      className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                    {errors.end_time && (
                  <p className="text-red-500 text-sm mt-1 text-left">{t(errors.end_time)}</p>
                )}
  </div>



  {/* Export Button */}
  <div className="col-span-12 md:col-span-3 flex items-end">
      <button
      disabled={loader}
      type="submit"
      className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
    >
     {t("downloadReport")} 
    </button>
  </div>
</form>

{showToast && (
             <ToastMessage
             setShowToast={setShowToast}
             toastMessage={toastMessage}
           />
        )
        }
    </div>
                

          <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {t("reportsTitle")}
          </h3>  
        </div>
        </div>
    )
}

export default Reports