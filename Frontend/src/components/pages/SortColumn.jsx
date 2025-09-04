import React from "react";
import {ArrowUp,ArrowDown} from 'lucide-react';

const SORTDIRECTION = {
  ASC: "ASC",
  DESC: "DESC",
};

function SortColumn({ sortDescriptor, name }) {  
  return (
    <div className="inline-flex items-center space-x-1 -mt-[4px] ml-1 cursor-pointer">
      {sortDescriptor?.column === name ? (
        sortDescriptor.direction === SORTDIRECTION.DESC ? (
          <ArrowDown className="w-4 h-4 text-gray-700" />
        ) : (
          <ArrowUp className="w-4 h-4 text-gray-700" />
        )
      ) : (
        <ArrowUp className="w-4 h-4 text-gray-700" />
      )}
    </div>
  );
}

export default SortColumn;
