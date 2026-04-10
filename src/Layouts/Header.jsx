import {
  Search,
  ShoppingCart,
  Menu,
  Mail,
  Phone,
  UserRound,
  Heart,
  X,
  ChevronDown,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Gravatar from "react-gravatar";
import HeaderCategoryDropdown from "../Components/HeaderCategoryDropdown";
import { useState } from "react";
import CartDropdown from "../Components/CartDropdown";
import { clearUser } from "../store/actions/clientActions";

function Header() {
  const user = useSelector((state) => state.client.user);
  const cart = useSelector((state) => state.shoppingCart.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch(clearUser());

    setShowUserDropdown(false);
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setShowCartDropdown(false);
  };

  const toggleMobileCart = () => {
    setShowCartDropdown((prev) => !prev);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative">
      <div className="hidden lg:flex items-center justify-between px-8 py-3 bg-[#252B42] text-white">
        <p className="flex items-center gap-2">
          <Phone size={16} />
          (225) 555-0118
        </p>

        <p className="flex items-center gap-2">
          <Mail size={16} />
          michelle.rivera@example.com
        </p>

        <h6>Follow Us and get a chance to win 80% off</h6>

        <div className="flex flex-row px-5 gap-3 items-center">
          <h6>Follow Us :</h6>
          <i className="fa-brands fa-instagram text-white text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
          <i className="fa-brands fa-youtube text-white text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
          <i className="fa-brands fa-facebook text-white text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
          <i className="fa-brands fa-twitter text-white text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-6 lg:px-10">
        <Link to="/" className="font-bold text-xl">
          Bandage
        </Link>

        <div className="hidden lg:flex justify-center gap-5 font-bold text-gray-500">
          <Link to="/">Home</Link>
          <HeaderCategoryDropdown />
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pricing">Pricing</Link>
        </div>

        <div className="flex gap-4 items-center lg:hidden">
          <Search
            className="cursor-pointer hover:scale-110 transition-transform"
            size={20}
          />

          <div className="relative">
            <button
              type="button"
              onClick={toggleMobileCart}
              className="relative cursor-pointer hover:scale-110 transition-transform"
            >
              <ShoppingCart size={20} />
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            {showCartDropdown && (
              <div className="absolute right-0 top-full mt-3 z-50">
                <CartDropdown />
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="hidden sm:flex flex-row gap-7 text-[#23A6F0] items-center">
          {user?.email ? (
            <div
              className="relative"
              onMouseEnter={() => setShowUserDropdown(true)}
              onMouseLeave={() => setShowUserDropdown(false)}
            >
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Gravatar email={user.email} size={40} className="rounded-full" />
                <span className="font-semibold text-sm">{user.name}</span>
                <ChevronDown size={16} />
              </button>

              {showUserDropdown && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
                  <div className="px-4 py-3 text-sm text-gray-700 border-b">
                    {user.email}
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-red-500 hover:bg-gray-100 transition"
                  >
                    Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              className="flex flex-row font-bold items-center gap-1"
              to="/login"
            >
              <UserRound />
              Login / Register
            </Link>
          )}

          <Search className="cursor-pointer hover:scale-110 transition-transform" />

          <div
            className="relative"
            onMouseEnter={() => setShowCartDropdown(true)}
            onMouseLeave={() => setShowCartDropdown(false)}
          >
            <button
              type="button"
              className="relative cursor-pointer hover:scale-110 transition-transform"
            >
              <ShoppingCart />
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            {showCartDropdown && <CartDropdown />}
          </div>

          <Heart className="cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 pb-6 text-[#737373] text-lg font-semibold">
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>

          <Link to="/shop" onClick={closeMobileMenu}>
            Shop
          </Link>

          <Link to="/about" onClick={closeMobileMenu}>
            About
          </Link>

          <Link to="/blog" onClick={closeMobileMenu}>
            Blog
          </Link>

          <Link to="/contact" onClick={closeMobileMenu}>
            Contact
          </Link>

          <Link to="/pricing" onClick={closeMobileMenu}>
            Pricing
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;