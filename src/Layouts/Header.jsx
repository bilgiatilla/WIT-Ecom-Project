import {
  Search,
  ShoppingCart,
  Menu,
  Mail,
  Phone,
  UserRound,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";
import HeaderCategoryDropdown from "../Components/HeaderCategoryDropdown";
import { useState } from "react";
import CartDropdown from "../Components/CartDropdown";

function Header() {
  const user = useSelector((state) => state.client.user);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

  return (
    <header>
      <div className="hidden lg:flex items-center justify-between px-8 py-3 bg-[#252B42] text-white">
        <p className="flex">
          <Phone />
          (225) 555-0118
        </p>
        <p className="flex">
          <Mail />
          michelle.rivera@example.com
        </p>
        <h6>Follow Us and get a chance to win 80% off</h6>
        <div className="flex flex-row px-5 gap-3">
          <h6 className="">Follow Us :</h6>
          <i className="fa-brands fa-instagram text-white text-2xl"></i>
          <i className="fa-brands fa-youtube text-white text-2xl"></i>
          <i className="fa-brands fa-facebook text-white text-2xl"></i>
          <i className="fa-brands fa-twitter text-white text-2xl"></i>
        </div>
      </div>
      <div className="flex justify-between  p-10">
        <h3 className="font-bold text-xl">Bandage</h3>
        <div className="hidden lg:flex justify-center gap-5 font-bold  text-gray-500">
          <Link to="/">Home</Link>
          <HeaderCategoryDropdown />
          <Link to="/about">About</Link>
          <a href="">Blog</a>
          <Link to="/contact">Contact</Link>
          <a href="">Pages</a>
        </div>

        <div className="flex gap-4 items-center lg:hidden">
          <Search size={20} />
          <div className="relative">
            <ShoppingCart size={20} />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </div>
          <Menu size={20} />
        </div>
        <div className="sm:flex flex-row gap-7 text-[#23A6F0] hidden items-center">
          {user?.email ? (
            <div className="flex items-center gap-2">
              <Gravatar email={user.email} size={40} />
              <span>{user.name}</span>
            </div>
          ) : (
            <Link
              className="flex flex-row font-bold items-center gap-1"
              to="/signup"
            >
              <UserRound /> Login / Register
            </Link>
          )}

          <Search className="cursor-pointer" />

          <div
            className="relative"
            onMouseEnter={() => setShowCartDropdown(true)}
            onMouseLeave={() => setShowCartDropdown(false)}
          >
            <button className="relative cursor-pointer">
              <ShoppingCart />
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            {showCartDropdown && <CartDropdown />}
          </div>

          <Heart className="cursor-pointer" />
        </div>
      </div>
      <div className="grid justify-center lg:hidden gap-3 pt-5 pb-10 text-[#737373] text-lg font-semibold">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <a href="">Pricing</a>
        <a href="">Contact</a>
      </div>
    </header>
  );
}

export default Header;
