import { Link } from "react-router-dom";
import Cloths from "./ShopPageSections/Cloths";
import ShopProducts from "./ShopPageSections/ShopProducts";

function ShopPage() {
  return <div>
    <div className="bg-[#FAFAFA]">
    <h3>Shop</h3>
    <Link to="/">Home</Link>
    <h6>Shop</h6>
    </div>
    <Cloths/>
    <ShopProducts/>
  </div>;
}

export default ShopPage;