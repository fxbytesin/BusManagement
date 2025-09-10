import { useEffect, useState } from "react";
import { Loader, Printer } from "lucide-react";
import ApiService from '../../services/api';
import ToastMessage from './ToastMessage';

const TicketSystem = (
  { 
    tripId,
    busCapacity,
    t
  }) => {
  const [ticketForm, setTicketForm] = useState({
    from_stop: "",
    to_stop: "",
    fare: "",
    payment_mode: "cash",
    pos_machine_id: "",
    seat_no: "",
    trip_id : ""
  });
  const [machineData,setMachineData] = useState([]) 
  const [showModal, setShowModal] = useState(false);
  const [trip, setTrip] = useState([])
  const [loading, setLoading] = useState(true)
  const [bookedTicket, setBookedTicket] = useState([])
  const [errors, setErrors] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
  // eslint-disable-next-line no-unused-vars
    const [sortDescriptor, setSortDescriptor] = useState({
      column: "bus_number",
      direction: "ASC",
    }); 
// eslint-disable-next-line no-unused-vars
const [page, setPage] = useState(1);
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

  const handleSubmit = async () => {
      
    let newErrors = {};
  
    if (!ticketForm.from_stop) {
      newErrors.from_stop = t("fromTicketField");
    }
    if (!ticketForm.to_stop) {
      newErrors.to_stop = t("fromTicketField");
    }
    if (!ticketForm.fare) {
      newErrors.fare = t("baseFareRequired");
    }
    if (!ticketForm.pos_machine_id) {
      newErrors.pos_machine_id = t("posMachineRequired");
    }
    if (!ticketForm.seat_no) {
      newErrors.seat_no = t("seatNoRequired")
    }
     
    setErrors(newErrors);
  
    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) return;
    
    const payload = {
      fare: parseFloat(ticketForm.fare),
      pos_machine_id: parseInt(ticketForm.pos_machine_id, 10),
      seat_no: parseInt(ticketForm.seat_no, 10),
      trip_id: parseInt(tripId, 10),
      from_stop: ticketForm.from_stop,
      to_stop: ticketForm.to_stop,
      payment_mode : ticketForm.payment_mode
    };    
  
    const response = await ApiService.createTicket(payload)    
    if (response?.success) {
      setToastMessage("Ticket Add Successfully");
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000);
      getTrip()
      getBookTrips()
    }
    setShowModal(false)
    setTicketForm({
      from_stop: "",
      to_stop: "",
      fare: "",
      payment_mode: "cash",
      pos_machine_id: "",
      seat_no: "",
    })
  };

  const getTrip = async () => {
    try {
      setLoading(true)
      const response = await ApiService.getTicketSpecificTrip(tripId); 
      if (response?.success === true) {      
          setTrip(response?.data)
        }            
    } catch (err) {
    }
    finally {
      setLoading(false  )
    }
  }

  const getBookTrips = async () => {
    try {
      const response = await ApiService.getBookedTicket(tripId); 
      setBookedTicket(response?.data?.allocatedSeats)
    } catch (err) {
    }
  }

  useEffect(() => {
    const body = {
      search : search,
      limit: 10,
      page: page,
      order: sortDescriptor.direction,
      orderColumn : sortDescriptor.column
    }
    const getMachineData = async () => {
      try {
        const response = await ApiService.getPos(body);      
        setMachineData(response?.data?.data)
      } catch (err) {
      }
    }  
 
    getMachineData()
    getTrip()
    getBookTrips()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => {    
    setTicketForm({
      from_stop: "",
      to_stop: "",
      fare: "",
      payment_mode: "cash",
      pos_machine_id: "",
      seat_no: "",
    })
    setShowModal(false)
    setErrors({})
  }
    
  return (
    <div className='flex'>
      <div className='w-full'>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold mb-6 ml-5 mt-5">{t("ticketing")}</h3>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-6 mr-5 mt-5"
          >
            {t("createTicket")}
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
              <div className="bg-white rounded-lg shadow-sm border p-6">

                {/* From Stop */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-left">{t("fromStop")} *</label>
                  <input
                    type="text"
                    value={ticketForm.from_stop}
                    onChange={(e) => {
                      setTicketForm({ ...ticketForm, from_stop: e.target.value });
                      if (errors.from_stop) setErrors({ ...errors, from_stop: "" });
                    }}
                    className="w-full p-2 border rounded-md"
                    placeholder={t("fromStopPlaceholder")}
                  />
                  {errors.from_stop && <p className="text-red-500 text-sm mt-1 text-left">{errors.from_stop}</p>}
                </div>

                {/* To Stop */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-left">{t("toStop")} *</label>
                  <input
                    type="text"
                    value={ticketForm.to_stop}
                    onChange={(e) => {
                      setTicketForm({ ...ticketForm, to_stop: e.target.value });
                      if (errors.to_stop) setErrors({ ...errors, to_stop: "" });
                    }}
                    className="w-full p-2 border rounded-md"
                    placeholder={t("toStopPlaceholder")}
                  />
                  {errors.to_stop && <p className="text-red-500 text-sm mt-1 text-left">{errors.to_stop}</p>}
                </div>

                {/* Fare */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-left">{t("fare")} *</label>
                  <input
                    type="number"
                    value={ticketForm.fare}
                    onChange={(e) => {
                      setTicketForm({ ...ticketForm, fare: e.target.value });
                      if (errors.fare) setErrors({ ...errors, fare: "" });
                    }}
                    className="w-full p-2 border rounded-md"
                    placeholder="60"
                  />
                  {errors.fare && <p className="text-red-500 text-sm mt-1 text-left">{errors.fare}</p>}
                </div>

                {/* Payment Mode */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-left">{t("paymentMode")} *</label>
                  <select
                    value={ticketForm.payment_mode}
                    onChange={(e) => setTicketForm({ ...ticketForm, payment_mode: e.target.value })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="cash">{t("cash")}</option>
                  </select>
                </div>

                {/* POS Number */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-left">{t("posNumber")} *</label>
                  <select
                    className="w-full p-2 border rounded-md text-left"
                    value={ticketForm.pos_machine_id}
                    onChange={(e) => {
                      setTicketForm({ ...ticketForm, pos_machine_id: e.target.value });
                      if (errors.pos_machine_id) setErrors({ ...errors, pos_machine_id: "" });
                    }}
                  >
                    <option value="" disabled>{t("selectPosNumber")}</option>
                    {machineData?.map(item => <option key={item.id} value={item.id}>{item?.serial_no}</option>)}
                  </select>
                  {errors.pos_machine_id && <p className="text-red-500 text-sm mt-1 text-left">{errors.pos_machine_id}</p>}
                </div>

                {/* Seat Number */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1 text-left">{t("seatNumber")} *</label>
                  <select
                    value={ticketForm.seat_no}
                    onChange={(e) => {
                      setTicketForm({ ...ticketForm, seat_no: e.target.value });
                      if (errors.seat_no) setErrors({ ...errors, seat_no: "" });
                    }}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="" disabled>{t("selectSeatNumber")}</option>
                    {Array.from({ length: busCapacity }, (_, i) => i + 1).map(seat => (
                      <option key={seat} value={seat} disabled={bookedTicket.includes(seat)}>
                        {seat} {bookedTicket.includes(seat) ? `(${t("booked")})` : ""}
                      </option>
                    ))}
                  </select>
                  {errors.seat_no && <p className="text-red-500 text-sm mt-1 text-left">{errors.seat_no}</p>}
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={handleClose}
                    className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50"
                  >
                    {t("cancel")}
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 flex items-center"
                  >
                    <Printer className="w-4 h-4 mr-2" />
                    {t("bookTicket")}
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tickets Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden w-full">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t("ticketNumber")}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t("fromStop")}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t("toStop")}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t("status")}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t("paymentMode")}</th>
              </tr>
            </thead>

            {loading ? (
              <tr>
                <td colSpan={9} className="py-10">
                  <div className="flex justify-center items-center w-full"><Loader /></div>
                </td>
              </tr>
            ) : trip.length > 0 ? (
              <tbody className="bg-white divide-y divide-gray-200">
                {trip.map(trip => (
                  <tr key={trip.id}>
                    <td>{trip.ticket_number}</td>
                    <td>{trip.from_stop}</td>
                    <td>{trip.to_stop}</td>
                    <td>{trip.status}</td>
                    <td>{trip.payment_mode}</td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tr>
                <td colSpan={9} className="py-10 text-center text-gray-500 italic">{t("noDataFound")}</td>
              </tr>
            )}
          </table>
        </div>

        {showToast && <ToastMessage setShowToast={setShowToast} toastMessage={toastMessage} />}
      </div>
    </div>
  );
};

export default TicketSystem;