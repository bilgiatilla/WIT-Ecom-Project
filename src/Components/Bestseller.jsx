import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import slugify from "../utils/slugify";

function Bestseller({ products = [] }) {
  const categories = useSelector((state) => state.product.categories);

  const getProductLink = (product) => {
    const category = categories.find((item) => item.id === product.category_id);

    const gender = category?.gender === "k" ? "kadin" : "erkek";
    const categoryName = slugify(category?.title || "kategori");

    return `/shop/${gender}/${categoryName}/${product.category_id}/${slugify(
      product.name
    )}/${product.id}`;
  };

  return (
    <section className="px-10 lg:px-40 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} to={getProductLink(product)}>
            <div className="text-center grid gap-2 py-5 justify-center cursor-pointer transition duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src={product.images?.[0]?.url}
                alt={product.name}
                className="w-full object-cover"
              />

              <h3 className="font-bold">{product.name}</h3>

              <p className="text-[#737373] font-bold line-clamp-1">
                {product.description}
              </p>

              <p className="font-bold">
                <span className="text-[#23856D]">₺{product.price}</span>
              </p>

              <div className="flex gap-2 mt-2 justify-center">
                <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                <span className="w-4 h-4 rounded-full bg-green-700"></span>
                <span className="w-4 h-4 rounded-full bg-orange-400"></span>
                <span className="w-4 h-4 rounded-full bg-gray-800"></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Bestseller;