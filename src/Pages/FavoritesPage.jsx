import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/actions/shoppingCartActions";
import { removeFavorite } from "../store/actions/favoritesActions";

function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFavorite = (productId) => {
    dispatch(removeFavorite(productId));
  };

  if (favorites.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <div className="flex justify-center mb-4">
          <Heart className="w-14 h-14 text-gray-300" />
        </div>
        <h1 className="text-3xl font-bold mb-3">My Favorites</h1>
        <p className="text-gray-500 mb-6">
          You have no favorite products yet.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#23A6F0] text-white px-6 py-3 rounded-md font-semibold"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">My Favorites</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden bg-white shadow-sm"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.images?.[0]?.url}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
            </Link>

            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <h2 className="font-bold text-lg mb-2 hover:text-[#23A6F0] transition">
                  {product.name}
                </h2>
              </Link>

              <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>

              <p className="text-xl font-bold mb-4">₺{product.price}</p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-[#23A6F0] text-white py-2 rounded-md font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>

                <button
                  type="button"
                  onClick={() => handleRemoveFavorite(product.id)}
                  className="border p-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;