import { ChevronRight } from "lucide-react";
import BrandLogos from "../Components/Services";
import DescriptionSection from "./ProductPageSections/DescriptionSection";
import ProductCard from "./ProductPageSections/ProductCard";
import { Link } from "react-router-dom";
import Bestseller from "../Components/Bestseller";

function ProductPage() {
  return (
    <div>
      <div className="flex flex-row justify-center gap-5 pt-5 font-bold">
        <Link to="/">Home</Link>
        <ChevronRight />
        <h6 className="text-[#737373]">Shop</h6>
      </div>
      <ProductCard />
      <DescriptionSection />
      <h2 className="font-bold text-center text-xl lg:text-start lg:px-40">BESTSELLER PRODUCTS</h2>
      <Bestseller />
      <BrandLogos />
    </div>
  );
}
export default ProductPage;
