function Pagination({ currentPage, totalPages, onPageChange }) {
  const getVisiblePages = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }
    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-fit shadow">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm bg-gray-100 text-gray-400 disabled:cursor-not-allowed"
      >
        First
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm border-l border-gray-300 bg-white text-sky-500 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      {visiblePages.map((page, index) => 
        page === "..." ? ( <span
            key={`dots-${index}`}
            className="px-4 py-2 text-sm border-l border-gray-300 bg-white text-gray-400"
          >
            ...
          </span>
        ) : (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 text-sm border-l border-gray-300 ${
            currentPage === page
              ? "bg-sky-500 text-white"
              : "bg-white text-sky-500 hover:bg-gray-50"
          }`}
        >
          {page}
        </button>
      )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-sm border-l border-gray-300 bg-white text-sky-500 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;