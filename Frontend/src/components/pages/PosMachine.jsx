import React, { useEffect, useState } from "react";
import ApiService from '../../services/api';
import { Loader, Plus, Trash2 } from 'lucide-react';
import DataPagination from './DataPagination';
import SortColumn from './SortColumn';
import ToastMessage from './ToastMessage';
import ConfirmDelete from './ConfirmDelete';

const PosMachine = ({
    showModalPos,
    setShowModalPos,
    t
}) => {
  const [posForm, setPosForm] = useState({
    serial_no: "",
    status: "active", // default active
  });
    
  const [posData, setPosData] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("");
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "name",
    direction: "ASC",
  }); 
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

    
    const handleSubmit = async(e) => {
      let newErrors = {};

      if (!posForm.serial_no.trim()) {
        newErrors.serial_no = t("serialNoRequired");
      } else if (!/^\d+$/.test(posForm.serial_no)) {
        newErrors.serial_no = t("serialNoNumeric");
      }
      
    
      if (!posForm.status) {
        newErrors.status = "Status is required.";
      }
    
      setErrors(newErrors);
    
      if (Object.keys(newErrors).length > 0) return;
      
      
      
    const payload = {
      serial_no: posForm.serial_no,
      status: posForm.status,
    };
        const response = await ApiService.addPos(payload)    
      if (response?.success) {
        setPosData([...posData, response.data])
        setShowToast(true)
        setToastMessage("Pos Machine Create Successfully")
        setTimeout(() => setShowToast(false), 3000);
     }

    setShowModalPos(false);
    setPosForm({ serial_no: "", status: "active" });
    };
    
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
            const response = await ApiService.getPos(body);      
        setPosData(response?.data?.data)
        setTotalPages(response?.data?.pagination?.totalPages)
        } catch (err) {
      }
      finally {
        setLoading(false)
      }
      }
    useEffect(() => {
          getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, page, sortDescriptor])
    useEffect(() => {
      if (!showModalPos) {
      setErrors({})
    }
    }, [showModalPos])
  
    
  const handleDeletePos = async (id) => {      
        try {
          const response = await ApiService.deletePos(id);
          if (response.success) {
            // optional: refresh list or remove item from state
            setPosData((prev) => prev.filter((pos) => pos.id !== id));
            setShowToast(true)
            setToastMessage(response.data.message)
            setTimeout(() => setShowToast(false), 3000);
          } else {
          }
        } catch (error) {
        }
  };  
  

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
    <div>
      {/* Button to open modal */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">{t("posMachine")}</h3>
        
      <div className='flex'>
        <form className="flex max-w-lg mx-auto mr-6">   
              <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder={t("searchPlaceholder")}
               onChange={handleChange}
              />
       
          </form>
                    <button
                      onClick={() => setShowModalPos(true)}
                      className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-orange-700"
                    >
                      <Plus className="w-5 h-5" />
                      <span>{t("addPOSMachine")}</span>
                    </button>
                  </div>
            </div>
      {/* Modal */}
      {showModalPos && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h2 className="text-lg font-semibold mb-4">{t("addPOSMachine")}</h2>
            {/* Serial Number */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("serialNo")} *
              </label>
              <input
                type="text"
                value={posForm.serial_no}
                onChange={(e) => {
                  setPosForm({ ...posForm, serial_no: e.target.value })
                  if (errors.serial_no) {
                    setErrors({ ...errors, serial_no: "" }); // clear error when typing
                  }
                }
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="POS12345678"
              />
               {errors.serial_no && (
               <p className="text-red-500 text-sm mt-1  text-left">{errors.serial_no}</p>
               )}
            </div>

            {/* Status */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("status")} *
              </label>
              <select
                value={posForm.status}
                onChange={(e) =>
                  setPosForm({ ...posForm, status: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="active">{t("active")}</option>
                <option value="inactive">{t("inactive")}</option>
              </select>
              {errors.status && (
    <p className="text-red-500 text-sm mt-1  text-left">{errors.status}</p>
  )}
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
                {t("cancel")}
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
              >
                {t("save")}
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
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider"
               onClick={() => handleSorting("serial_no")}
              >
                <div className='flex'>
                {t("serialNo")}
                      <SortColumn
                        sortDescriptor={sortDescriptor}
                        name="serial_no"
                        />
                      </div>
        </th>
        <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
        {t("status")}
            </th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
       {t("actions")}
        </th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody className="divide-y divide-gray-200">
  {loading ? (
    <tr>
      <td colSpan={3} className="py-10">
        <div className="flex justify-center items-center w-full">
          <Loader />
        </div>
      </td>
    </tr>
  ) : posData?.length > 0 ? (
    posData.map((pos) => (
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
              title="delete"
              onClick={() => {
                setSelectedId(pos.id); // store id of item to delete
                setOpen(true);
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
        colSpan={3}
        className="px-6 py-4 text-center text-gray-500 italic"
      >
       {t("noPosMachines")}
      </td>
    </tr>
  )}
</tbody>
        </table>
        {showToast && (
             <ToastMessage
             setShowToast={setShowToast}
             toastMessage={toastMessage}
           />
        )
        }
        {posData && posData.length > 0 && (
                  <DataPagination
                    onPageChange={handlePageChange}
                    totalPages={totalPages}
                    currentPage={page}
                  />
        )}
    {open && (
  <ConfirmDelete
    onConfirm={() => {
      handleDeletePos(selectedId); 
      setOpen(false);
      setSelectedId(null);
    }}
    onCancel={() => {
      setOpen(false);
      setSelectedId(null);
    }}
  />
)}

</div>
    </div>
  );
};

export default PosMachine;
