import { LayoutGrid, ListChecks } from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../../Components/Pagination.jsx";
import BrandLogos from "../../Components/Services.jsx";
import { fetchProducts } from "../../store/thunks/productThunks";
import slugify from "../../utils/slugify";

function ShopProducts({ categoryId }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const navigate = useNavigate();
  const params = useParams();

  const gender = params.gender || "erkek";
  const categoryName = params.categoryName || "kategori";

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.product.productList);
  const total = useSelector((state) => state.product.total);
  const fetchState = useSelector((state) => state.product.fetchState);

  const limit = 25;
  const totalPages = Math.ceil(total / limit);

  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, total);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, sort, filter]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const offset = (currentPage - 1) * limit;
      dispatch(fetchProducts({ categoryId, sort, filter, limit, offset }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [dispatch, categoryId, sort, filter, currentPage]);

  if (fetchState === "FETCHING") {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (fetchState === "FAILED") {
    return (
      <div className="py-10 text-center text-red-500 font-bold">
        Ürünler yüklenirken bir hata oluştu.
      </div>
    );
  }

  return (
    <div className="pt-10 flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 md:px-6 lg:px-10 gap-4">
        <h6 className="text-[#737373] font-bold text-sm md:text-base lg:text-lg text-center lg:text-left">
          Showing {startItem}-{endItem} of {total} results
        </h6>

        <div className="flex items-center justify-center gap-3 font-bold flex-wrap">
          <h6 className="text-[#737373]">Views:</h6>

          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`p-3 rounded-md border cursor-pointer transition ${
              viewMode === "grid"
                ? "bg-black text-white border-black"
                : "bg-white text-[#737373] border-gray-300"
            }`}
          >
            <LayoutGrid size={18} />
          </button>

          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={`p-3 rounded-md border cursor-pointer transition ${
              viewMode === "list"
                ? "bg-black text-white border-black"
                : "bg-white text-[#737373] border-gray-300"
            }`}
          >
            <ListChecks size={18} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full sm:w-55 px-4 py-2 bg-[#F9F9F9] text-[#737373] rounded-md border"
          >
            <option value="">Select Sort</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
          </select>

          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter products"
            className="w-full sm:w-55 px-4 py-2 rounded-md border"
          />
        </div>
      </div>

      <section className="px-4 md:px-6 lg:px-40 justify-center">
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              : "flex flex-col gap-6"
          }
        >
          {productList.map((product) => (
            <div
              key={product.id}
              onClick={() =>
                navigate(
                  `/shop/${gender}/${categoryName}/${categoryId}/${slugify(
                    product.name
                  )}/${product.id}`
                )
              }
              className={`cursor-pointer transition duration-300 hover:shadow-lg hover:scale-[1.02] ${
                viewMode === "grid"
                  ? "text-center grid gap-2 py-5 justify-center"
                  : "flex flex-col sm:flex-row gap-4 items-center border rounded-lg p-4"
              }`}
            >
              <img
                src={product.images?.[0]?.url}
                alt={product.name}
                className={`object-cover ${
                  viewMode === "grid"
                    ? "w-full h-72"
                    : "w-full sm:w-48 h-72 sm:h-48 rounded-md"
                }`}
              />

              <div
                className={`${
                  viewMode === "grid"
                    ? "grid gap-2"
                    : "flex flex-col gap-2 text-center sm:text-left"
                }`}
              >
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-[#737373] font-bold">{product.description}</p>
                <p className="font-bold">
                  <span className="text-[#23856D]">₺{product.price}</span>
                </p>

                <div
                  className={`flex gap-2 mt-2 ${
                    viewMode === "grid"
                      ? "justify-center"
                      : "justify-center sm:justify-start"
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                  <span className="w-4 h-4 rounded-full bg-green-700"></span>
                  <span className="w-4 h-4 rounded-full bg-orange-400"></span>
                  <span className="w-4 h-4 rounded-full bg-gray-800"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="py-10 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <BrandLogos />
    </div>
  );
}

export default ShopProducts;