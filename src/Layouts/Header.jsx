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

function Header() {
  const user = useSelector((state) => state.client.user);
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
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <a href="">Blog</a>
          <Link to="/contact">Contact</Link>
          <a href="">Pages</a>
        </div>

        <div className="flex gap-4 items-center lg:hidden">
          <Search size={20} />
          <ShoppingCart size={20} />
          <Menu size={20} />
        </div>
        <div className="sm:flex flex-row gap-7 text-[#23A6F0] hidden">
          {user?.email ? (
        <div>
          <Gravatar email={user.email} size={40} />
          <span>{user.name}</span>
        </div>
      ) : (
          <Link className="flex flex-row font-bold" to="/signup">
            {" "}
            <UserRound /> Login / Register
          </Link>
          )}
          <Search />
          <ShoppingCart />
          <Heart />
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
