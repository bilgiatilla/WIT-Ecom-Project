import { Link } from "react-router-dom";
import Cloths from "./ShopPageSections/Cloths";
import ShopProducts from "./ShopPageSections/ShopProducts";
import { ChevronRight } from "lucide-react";

function ShopPage() {
  return <div className="text-center">
    <div className="bg-[#FAFAFA] flex flex-col lg:flex-row lg:justify-between lg:px-10">
    <h3 className="text-3xl font-bold pt-10 lg:pt-5">Shop</h3>
    <div className="flex flex-row justify-center gap-5 pt-5 font-bold">
    <Link to="/">Home</Link>
    <ChevronRight/>
    <h6 className="text-[#737373]">Shop</h6>
    </div>
    </div>
    <Cloths/>
    <ShopProducts/>
  </div>;
}

export default ShopPage;