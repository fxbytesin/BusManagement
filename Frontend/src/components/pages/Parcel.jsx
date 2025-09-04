import React, { useEffect, useState } from 'react'
import ApiService from '../../services/api';

const Parcel = ({
    buses,
    setBuses,
    showParcel,
    setShowParcel
}) => {
    const [parcelData, setParcelData] = useState({
        bus_id: "",
        sender_name: "",
        sender_phone: "",
        receiver_name: "",
        receiver_phone: "",
        from_stop: "",
        to_stop: "",
        description: "",
        weight: "",
        fare: "",
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setParcelData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requiredFields = [
                "bus_id",
                "sender_name",
                "sender_phone",
                "receiver_name",
                "receiver_phone",
                "from_stop",
                "to_stop",
                "description",
                "weight",
                "fare",
              ];
              
              // ✅ Check if any required field is empty
              for (let field of requiredFields) {
                if (!parcelData[field] || parcelData[field].toString().trim() === "") {
                  alert("⚠️ All fields are mandatory. Please fill in every field.");
                  return;
                }
              }
        
          // ✅ Phone number validation
          const phoneRegex = /^[0-9]{10}$/;
          if (!phoneRegex.test(parcelData.sender_phone)) {
            alert("Sender phone must be a 10-digit number");
            return;
          }
          if (!phoneRegex.test(parcelData.receiver_phone)) {
            alert("Receiver phone must be a 10-digit number");
            return;
          }
        
          // ✅ Number validation (must be > 0)
          if (parseFloat(parcelData.weight) <= 0) {
            alert("Weight must be greater than 0");
            return;
          }
          if (parseFloat(parcelData.fare) <= 0) {
            alert("Fare must be greater than 0");
            return;
          }
      
          // Convert numeric values
          const payload = {
            ...parcelData,
            bus_id: parseInt(parcelData.bus_id, 10),
            weight: parseFloat(parcelData.weight),
            fare: parseFloat(parcelData.fare),
          };
      
          // API call
          const response = await ApiService.createParcel(payload);
      
          if (response?.success === true) {
            alert("Package saved successfully");
            setShowParcel(false);
      
            // Reset form after success
            setParcelData({
              bus_id: "",
              sender_name: "",
              sender_phone: "",
              receiver_name: "",
              receiver_phone: "",
              from_stop: "",
              to_stop: "",
              description: "",
              weight: "",
              fare: "",
            });
          } else {
            throw new Error(response?.message || "Failed to save parcel");
          }
        } catch (err) {
          console.error("Error:", err);
          alert(err.message || "Something went wrong, please try again");
        }
      };
      
  useEffect(() => {
      
        // const getData = async () => {
        //   try {
        //     const response = await ApiService.getBus();      
        //     setBuses(response.data)

        //   } catch (err) {
        //   }
        // }
        // getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        showParcel ? 
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Bus */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Bus *
        </label>
        <select
          name="bus_id"
          value={parcelData.bus_id}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Bus</option>
          {buses?.map((bus) => (
            <option key={bus.id} value={bus.id}>
              {bus.bus_number}
            </option>
          ))}
        </select>
      </div>

      {/* Sender */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sender Name
        </label>
        <input
          type="text"
          name="sender_name"
          value={parcelData.sender_name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sender Phone
        </label>
        <input
          type="text"
          name="sender_phone"
          value={parcelData.sender_phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Receiver */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Receiver Name
        </label>
        <input
          type="text"
          name="receiver_name"
          value={parcelData.receiver_name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Receiver Phone
        </label>
        <input
          type="text"
          name="receiver_phone"
          value={parcelData.receiver_phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* From & To Stops */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          From Stop
        </label>
        <input
          type="text"
          name="from_stop"
          value={parcelData.from_stop}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          To Stop
        </label>
        <input
          type="text"
          name="to_stop"
          value={parcelData.to_stop}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <input
          name="description"
          value={parcelData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Weight */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Weight (kg)
        </label>
        <input
          type="text"
          step="0.1"
          name="weight"
          value={parcelData.weight}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Fare */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Fare (₹)
        </label>
        <input
          type="number"
          step="0.01"
          name="fare"
          value={parcelData.fare}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Submit */}
          
      <div className="flex justify-end space-x-2 pt-4">
              <button
                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"   
                onClick={()=>setShowParcel(false)}        
              >
                {("cancel")}
              </button>
              <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                   type="submit"
              >
                {("save")}
              </button>
            </div>
            </form> : (
                <div>

                </div>
    )
  )
}

export default Parcel