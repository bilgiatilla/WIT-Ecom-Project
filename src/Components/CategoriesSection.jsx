import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../store/thunks/productThunks";
import { createCategoryPath } from "../utils/categoryUtils";

function CategoriesSection() {
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
    <section className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Top Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {topCategories.map((category) => (
          <Link
            key={category.id}
            to={createCategoryPath(category)}
            className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{category.title}</h3>
              <p className="text-sm text-gray-500">Rating: {category.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;