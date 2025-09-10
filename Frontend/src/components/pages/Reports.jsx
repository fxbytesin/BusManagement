import { BarChart3 } from 'lucide-react'
import React, { useState } from 'react'

const Reports = ({
    t
}) => {
    const [formData, setFormData] = useState({
        startDate: "",
        endDate: "",
        reportType: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // 🔹 Here you can call API to fetch or export data
      };
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
      Report Type
    </label>
    <select
      name="reportType"
      value={formData.reportType}
      onChange={handleChange}
      className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    >
      <option value="">Select type</option>
      <option value="revenue">Revenue</option>
      <option value="passenger">Passenger</option>
      <option value="occupancy">Occupancy</option>
    </select>
  </div>





  {/* Start Date */}
  <div className="col-span-12 md:col-span-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Start Date
    </label>
    <input
      type="date"
      name="startDate"
      value={formData.startDate}
      onChange={handleChange}
      className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>

  {/* End Date */}
  <div className="col-span-12 md:col-span-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      End Date
    </label>
    <input
      type="date"
      name="endDate"
      value={formData.endDate}
      onChange={handleChange}
      className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>



  {/* Export Button */}
  <div className="col-span-12 md:col-span-3 flex items-end">
    <button
      type="submit"
      className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
    >
      Export
    </button>
  </div>
</form>

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