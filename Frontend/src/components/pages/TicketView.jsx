import React, { useEffect, useState } from 'react'
import ApiService from '../../services/api'

const TicketView = ({
    busId
}) => {
    
    const[busticketDetails,setBusTicketDeatils] = useState([])
    useEffect(() => {
        const ticketDetail = async (id) => {
            try {
            const response = await ApiService.ticketDetails(id) // wait for API
            if (response?.data) {
                setBusTicketDeatils(response.data) // save to state
            }
        } catch (error) {
            console.error("Error fetching ticket details:", error)
        }
    }
    
    if (busId) {
        ticketDetail(busId)
    }
}, [busId])
return (
    <div>
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {("Seat Number")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {("Payment Mode")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {("Ticket Number")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {busticketDetails?.map((bus) => (
                  <tr key={bus.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {bus.seat_no}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {bus.payment_mode}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {bus.ticket_number}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default TicketView