import { useEffect, useState } from "react";
import { Printer } from "lucide-react";
import ApiService from '../../services/api';

const TicketSystem = ({ t }) => {
  const [ticketForm, setTicketForm] = useState({
    from_stop: "",
    to_stop: "",
    fare: "",
    journey_date: "",
    payment_mode: "cash",
    pos_machine_id: "",
    seat_no: "",
    bus_id: "",
    trip_id : ""
  });
  const [busData, setBuses] = useState([])
  const [machineData,setMachineData] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [trip, setTrip] = useState([])

  const handleSubmit = async () => {
    const selectedBus = busData.find(
      (bus) => bus.id === parseInt(ticketForm.bus_id, 10)
    );
  
    // Validation: seat number should not exceed bus capacity
    if (selectedBus && parseInt(ticketForm.seat_no, 10) > selectedBus.capacity) {
      alert(`Seat number cannot be more than ${selectedBus.capacity}`);
      return;
    }  

    const payload = {
      ...ticketForm,
      bus_id: parseInt(ticketForm.bus_id, 10),
      fare: parseFloat(ticketForm.fare),
      pos_machine_id: parseInt(ticketForm.pos_machine_id, 10),
      seat_no: parseInt(ticketForm.seat_no, 10),
    };
    
  
    const response = await ApiService.createTicket(payload)    
    if (response?.success) {
      alert("Ticket Created Successfully")      
    }
    setShowModal(false)
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await ApiService.getBus();      
        setBuses(response?.data)
      } catch (err) {
      }
    }
    const getMachineData = async () => {
      try {
        const response = await ApiService.getPos();      
        setMachineData(response?.data)
      } catch (err) {
      }
    }

    const getTrip = async () => {
      try {
        const response = await ApiService.getTrip(); 
        if (response?.success === true) {            
            setTrip(response?.data)
          }            
      } catch (err) {
      }
    }

    getData()
    getMachineData()
    getTrip()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => {
    setTicketForm({
      from_stop: "",
      to_stop: "",
      fare: "",
      journey_date: "",
      payment_mode: "cash",
      pos_machine_id: "",
      seat_no: "",
    })
    setShowModal(false)
  }

  
  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-6">{t("ticketing")}</h3>

      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-6"
      >
        Create Ticket
      </button>

      {
        showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
         <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
          <div className="bg-white rounded-lg shadow-sm border p-6">
          {/* From Stop */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">From Stop *</label>
            <input
              type="text"
              value={ticketForm.from_stop}
              onChange={(e) =>
                setTicketForm({ ...ticketForm, from_stop: e.target.value })
              }
              className="w-full p-2 border rounded-md"
              placeholder="Indore"
            />
          </div>
  
          {/* To Stop */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">To Stop *</label>
            <input
              type="text"
              value={ticketForm.to_stop}
              onChange={(e) =>
                setTicketForm({ ...ticketForm, to_stop: e.target.value })
              }
              className="w-full p-2 border rounded-md"
              placeholder="Dewas"
            />
          </div>
  
          {/* Fare */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Fare *</label>
            <input
              type="number"
              value={ticketForm.fare}
              onChange={(e) =>
                setTicketForm({ ...ticketForm, fare: e.target.value })
              }
              className="w-full p-2 border rounded-md"
              placeholder="60"
            />
          </div>
  
          {/* Journey Date */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Journey Date *</label>
            <input
              type="date"
              value={ticketForm.journey_date}
              onChange={(e) =>
                setTicketForm({ ...ticketForm, journey_date: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            />
          </div>
  
          {/* Payment Mode */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Payment Mode *</label>
            <select
              value={ticketForm.payment_mode}
              onChange={(e) =>
                setTicketForm({ ...ticketForm, payment_mode: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="cash">Cash</option>
            </select>
          </div>
  
          <div className="mb-4">
    <label className="block text-sm font-medium mb-1">Bus Number *</label>
    <select
      className="w-full p-2 border rounded-md"
      value={ticketForm.bus_id}
      onChange={(e) =>
        setTicketForm({ ...ticketForm, bus_id: e.target.value })
      }
    >
      <option value="" disabled>
        Select Bus Number
      </option>
      {busData?.map((item) => (
        <option key={item.id} value={item.id}>
          {item?.bus_number}
        </option>
      ))}
    </select>
  </div>
  
          
  
    <div className="mb-4">
    <label className="block text-sm font-medium mb-1">Pos Number *</label>
    <select
      className="w-full p-2 border rounded-md"
      value={ticketForm.pos_machine_id}
      onChange={(e) =>
        setTicketForm({ ...ticketForm, pos_machine_id: e.target.value })
      }
    >
      <option value="" disabled>
        Select Pos Number
      </option>
      {machineData?.map((item) => (
        <option key={item.id} value={item.id}>
          {item?.serial_no}
        </option>
      ))}
    </select>
  </div>
  
  
  
          {/* Seat No */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Seat No *</label>
            <input
              type="number"
              value={ticketForm.seat_no}
              onChange={(e) =>
                setTicketForm({ ...ticketForm, seat_no: e.target.value })
              }
              className="w-full p-2 border rounded-md"
              placeholder="20"
            />
          </div>
  
          {/* Actions */}
          <div className="flex justify-end space-x-2">
            <button
              onClick={() =>handleClose()}
              className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 flex items-center"
            >
              <Printer className="w-4 h-4 mr-2" />
              Book Ticket
            </button>
            </div>
            
          </div>
          </div>
    </div>
        )
      }
    </div>
  );
};

export default TicketSystem;
