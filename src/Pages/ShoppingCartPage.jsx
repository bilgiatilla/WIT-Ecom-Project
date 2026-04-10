import { Trash2, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCartItem,
  increaseCartItem,
  removeFromCart,
  toggleCartItem,
} from "../store/actions/shoppingCartActions";
import { useNavigate } from "react-router-dom";

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart);
  const navigate = useNavigate();
  const selectedItems = cart.filter((item) => item.checked);

  const productsTotal = selectedItems.reduce((sum, item) => {
    return sum + item.product.price * item.count;
  }, 0);

  const shippingTotal = selectedItems.length > 0 ? 29.99 : 0;
  const discount = productsTotal >= 150 ? shippingTotal : 0;
  const grandTotal = productsTotal + shippingTotal - discount;

  return (
    <div className="bg-[#FAFAFA] min-h-screen px-4 py-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl lg:text-3xl font-bold mb-6">
          My Cart ({cart.length})
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl border p-8 text-center text-gray-500">
            No items in your cart.
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="w-full lg:flex-1">
              <div className="flex flex-col gap-4">
                {cart.map((item) => {
                  const imageUrl =
                    item.product.images?.[0]?.url ||
                    "https://via.placeholder.com/150";

                  const itemTotal = item.product.price * item.count;

                  return (
                    <div
                      key={item.product.id}
                      className="bg-white rounded-xl border p-4 lg:p-6"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                        <div className="flex items-start gap-4 flex-1">
                          <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() =>
                              dispatch(toggleCartItem(item.product.id))
                            }
                            className="mt-3 w-5 h-5 accent-orange-500 cursor-pointer"
                          />

                          <img
                            src={imageUrl}
                            alt={item.product.name}
                            className="w-24 h-24 object-cover rounded-md border"
                          />

                          <div className="flex-1 min-w-0">
                            <h2 className="font-bold text-base lg:text-lg line-clamp-2">
                              {item.product.name}
                            </h2>

                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                              {item.product.description}
                            </p>

                            <p className="text-sm text-gray-500 mt-2">
                              Stok: {item.product.stock}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                          <div className="text-sm font-semibold text-green-600">
                            Kargo Ücretsiz
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                dispatch(decreaseCartItem(item.product.id))
                              }
                              className="w-10 h-10 border rounded-md text-xl cursor-pointer hover:bg-gray-50 disabled:opacity-50"
                              disabled={item.count <= 1}
                            >
                              -
                            </button>

                            <span className="w-10 text-center font-bold">
                              {item.count}
                            </span>

                            <button
                              onClick={() =>
                                dispatch(increaseCartItem(item.product.id))
                              }
                              className="w-10 h-10 border rounded-md text-xl cursor-pointer hover:bg-gray-50"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-lg font-bold text-[#F28D35] min-w-28 text-left lg:text-right">
                            ₺{itemTotal.toFixed(2)}
                          </div>

                          <button
                            onClick={() =>
                              dispatch(removeFromCart(item.product.id))
                            }
                            className="text-gray-500 hover:text-red-500 transition cursor-pointer"
                            aria-label="Delete"
                          >
                            <Trash2 className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full lg:w-90 lg:sticky lg:top-6">
 

              <div className="bg-white rounded-xl border p-6 mt-4 shadow-sm">
                <h2 className="text-3xl font-light mb-6">Order summary</h2>

                <div className="space-y-3 text-lg">
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">
                      ₺{productsTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">
                      ₺{shippingTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600">
                      Free shipping on orders over 150 TL.
                    </span>
                    <span className="font-semibold text-[#F28D35]">
                      -₺{discount.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="border-t my-5"></div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl text-gray-700">Total</span>
                  <span className="text-3xl font-bold text-[#F28D35]">
                    ₺{grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate("/create-order")}
                className="w-full bg-[#F28D35] text-white font-bold rounded-lg py-4 flex items-center justify-center gap-2 cursor-pointer"
              >
                Create Order
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCartPage;