import React from "react";
import { ArrowDownIcon, ArrowUpIcon, ArrowsUpDownIcon } from "@heroicons/react/24/solid";

const SORTDIRECTION = {
  ASC: "asc",
  DESC: "desc",
};

function SortColumn({ sortDescriptor, name }) {
  return (
    <div className="inline-flex items-center space-x-1">
      {sortDescriptor?.column === name ? (
        sortDescriptor.direction === SORTDIRECTION.DESC ? (
          <ArrowDownIcon className="w-4 h-4 text-gray-700" />
        ) : (
          <ArrowUpIcon className="w-4 h-4 text-gray-700" />
        )
      ) : (
        <ArrowsUpDownIcon className="w-4 h-4 text-gray-400" />
      )}
    </div>
  );
}

export default SortColumn;
