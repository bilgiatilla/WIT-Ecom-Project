import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/thunks/productThunks";
import { createCategoryPath } from "../../utils/categoryUtils";

function Cloths() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center gap-6 px-4 lg:px-10 py-8">
      {topCategories.map((category) => (
        <Link
          key={category.id}
          to={createCategoryPath(category)}
          className="bg-[#FAFAFA] p-6 block"
        >
          <div className="relative w-full aspect-square overflow-hidden">
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-full lg:w-55 object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 gap-3">
              <h3 className="text-lg font-bold uppercase">{category.title}</h3>
              <p className="text-sm font-bold"><i className="fa-solid fa-star yellow-star text-amber-300"></i>{category.rating}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cloths;