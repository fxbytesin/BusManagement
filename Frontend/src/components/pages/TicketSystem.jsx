import { Printer } from 'lucide-react'
import React from 'react'

const TicketSystem = ({
    t
}) => {
  return (
     <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">{t("ticketing")}</h3>
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <Printer className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                टिकटिंग सिस्टम
              </h3>
              <p className="text-gray-500">यह फीचर जल्द ही उपलब्ध होगा</p>
            </div>
          </div>
  )
}

export default TicketSystem