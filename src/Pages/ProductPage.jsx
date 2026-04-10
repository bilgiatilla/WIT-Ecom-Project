import { ChevronRight } from "lucide-react";
import BrandLogos from "../Components/Services";
import DescriptionSection from "./ProductPageSections/DescriptionSection";
import ProductCard from "./ProductPageSections/ProductCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import Bestseller from "../Components/Bestseller";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductDetail } from "../store/thunks/productThunks";

function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state.product.productDetail);
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
    }
  }, [dispatch, productId]);

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
        Ürün detayı yüklenirken bir hata oluştu.
      </div>
    );
  }

  if (!productDetail) return null;

  return (
    <div>
      <div className="px-6 lg:px-40 pt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex justify-center lg:justify-start flex-1">
          <div className="flex items-center gap-3 font-bold">
            <Link to="/">Home</Link>
            <ChevronRight />
            <Link to="/shop" className="text-[#737373]">
              Shop
            </Link>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => navigate(-1)}
            className="border px-5 py-2 rounded-md font-bold cursor-pointer 
                       hover:bg-black hover:text-white transition"
          >
            Back
          </button>
        </div>
      </div>

      <ProductCard product={productDetail} />

      <DescriptionSection product={productDetail} />

      <h2 className="font-bold text-center text-xl lg:text-start lg:px-40">
        BESTSELLER PRODUCTS
      </h2>

      <Bestseller />
      <BrandLogos />
    </div>
  );
}

export default ProductPage;