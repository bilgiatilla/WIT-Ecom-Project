import { Link } from "react-router-dom";
import Cloths from "./ShopPageSections/Cloths";
import ShopProducts from "./ShopPageSections/ShopProducts";
import { ChevronRight } from "lucide-react";

function ShopPage() {
  return <div className="text-center">
    <div className="bg-[#FAFAFA] ">
    <h3>Shop</h3>
    <div className="flex flex-row justify-center gap-5">
    <Link to="/">Home</Link>
    <ChevronRight/>
    <h6>Shop</h6>
    </div>
    </div>
    <Cloths/>
    <ShopProducts/>
  </div>;
}

export default ShopPage;