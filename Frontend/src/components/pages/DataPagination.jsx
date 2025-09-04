import React from "react";

const DataPagination = ({ onPageChange, totalPages, currentPage }) => {
  if (totalPages <= 1) return null;

  // Generate page numbers with ellipsis
  const generatePages = () => {
    let pages = [];

    if (totalPages <= 5) {
      // show all if small number of pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
      }
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex justify-center mt-4 mb-10">
      <ul className="flex items-center space-x-2">
        {/* Previous Button */}
        <li>
          <button
            className={`px-3 py-1 rounded-md border ${
              currentPage === 1
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100 border-gray-300"
            }`}
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {pages.map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="px-3 py-1 text-gray-500">...</span>
            ) : (
              <button
                className={`px-3 py-1 rounded-md border ${
                  currentPage === page
                    ? "bg-blue-500 text-white border-blue-500"
                    : "text-gray-700 hover:bg-gray-100 border-gray-300"
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            className={`px-3 py-1 rounded-md border ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100 border-gray-300"
            }`}
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DataPagination;
