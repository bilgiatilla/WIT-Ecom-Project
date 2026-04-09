import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { createCategoryPath } from "../utils/categoryUtils";
import { fetchCategories } from "../store/thunks/productThunks";

function HeaderCategoryDropdown() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const womenCategories = categories.filter((item) => item.gender === "k");
  const menCategories = categories.filter((item) => item.gender === "e");

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 text-gray-500 font-bold cursor-pointer"
      >
        Shop
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg z-50 px-10 py-8 min-w-105">
          <div className="grid grid-cols-2 gap-16 text-left">
            <div>
              <h3 className="font-bold text-[#252B42] mb-4">Kadın</h3>
              <div className="flex flex-col gap-3">
                {womenCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={createCategoryPath(category)}
                    className="text-[#737373] font-semibold hover:text-black transition"
                    onClick={() => setOpen(false)}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[#252B42] mb-4">Erkek</h3>
              <div className="flex flex-col gap-3">
                {menCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={createCategoryPath(category)}
                    className="text-[#737373] font-semibold hover:text-black transition"
                    onClick={() => setOpen(false)}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderCategoryDropdown;
