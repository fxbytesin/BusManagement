import React, { useEffect, useState } from "react";
import ApiService from '../../services/api';
import { Trash2 } from 'lucide-react';

const PosMachine = ({
    showModalPos,
    setShowModalPos,
}) => {
  const [posForm, setPosForm] = useState({
    serial_no: "",
    status: "active", // default active
  });
    
    const[posData,setPosData]= useState([])
    
    const handleSubmit = async() => {
    if (!posForm.status || !posForm.serial_no) {
        alert(("fillAllFields"));
        return;
        }
    const payload = {
      serial_no: posForm.serial_no,
      status: posForm.status,
    };
        const response = await ApiService.addPos(payload)    
        if (response?.success) {
            alert("Pos Machine Create Successfully")
        setPosData([...posData,response.data])
     }

    setShowModalPos(false);
    setPosForm({ serial_no: "", status: "active" });
    };
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await ApiService.getPos();      
                setPosData(response?.data)
            } catch (err) {
            }
          }
          getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleDeletePos = async (id) => {
        try {
          const response = await ApiService.deletePos(id);
          if (response.success) {
            alert(response.data.message); // show success message
            // optional: refresh list or remove item from state
            setPosData((prev) => prev.filter((pos) => pos.id !== id));
          } else {
            alert("Failed to delete POS machine");
          }
        } catch (error) {
          console.error("Error deleting POS:", error);
          alert("Something went wrong. Please try again.");
        }
      };      

  return (
    <div>
      {/* Button to open modal */}

      {/* Modal */}
      {showModalPos && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h2 className="text-lg font-semibold mb-4">Add POS Machine</h2>

            {/* Serial Number */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Serial No *
              </label>
              <input
                type="text"
                value={posForm.serial_no}
                onChange={(e) =>
                  setPosForm({ ...posForm, serial_no: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="POS12345678"
              />
            </div>

            {/* Status */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status *
              </label>
              <select
                value={posForm.status}
                onChange={(e) =>
                  setPosForm({ ...posForm, status: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-2 pt-4">
              <button
                onClick={() => {
                   setShowModalPos(false);
                  setPosForm({ serial_no: "", status: "active" });
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
          )}
          

          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
  <table className="w-full text-sm text-left text-gray-700">
    {/* Table Head */}
    <thead className="bg-gray-100">
      <tr>
        <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Serial Number
        </th>
        <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Status
            </th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Action
        </th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody className="divide-y divide-gray-200">
      {posData?.length > 0 ? (
        posData?.map((pos) => (
          <tr
            key={pos.id}
            className="hover:bg-gray-50 transition-colors duration-150"
          >
            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
              {pos.serial_no}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  pos.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {pos.status}
              </span>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button
                        className="text-red-600 hover:text-red-900"
                            title={("delete")}
                            onClick={() => {
                                if (window.confirm("Are you sure you want to delete this POS machine?")) {
                                  handleDeletePos(pos?.id);
                                }
                              }}                              
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan="2"
            className="px-6 py-4 text-center text-gray-500 italic"
          >
            No POS machines found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>


    </div>
  );
};

export default PosMachine;
