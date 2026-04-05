function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-fit shadow">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm bg-gray-100 text-gray-400 disabled:cursor-not-allowed"
      >
        First
      </button>

      {pages.map((page) => (
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
      ))}

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