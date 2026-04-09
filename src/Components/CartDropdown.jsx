import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseCartItem,
  decreaseCartItem,
  removeFromCart,
} from "../store/actions/shoppingCartActions";

function CartDropdown() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart);
  const totalAmount = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.product.price * item.count, 0);

  return (
    <div className="absolute right-0 top-full w-90 bg-white border rounded-lg shadow-lg z-50">
      <div className="p-4 border-b">
        <h3 className="font-bold text-lg">Sepetim ({cart.length} Ürün)</h3>
      </div>

      {cart.length === 0 ? (
        <div className="p-4 text-gray-500">Sepetiniz boş.</div>
      ) : (
        <>
          <div className="max-h-100 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.product.id} className="flex gap-3 p-4 border-b">
                <img
                  src={item.product.images?.[0]?.url}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-md border"
                />

                <div className="flex-1">
                  <h4 className="font-semibold text-sm line-clamp-2">
                    {item.product.name}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Adet: {item.count}
                  </p>

                  <p className="text-[#F28D35] font-bold mt-1">
                    ₺{(item.product.price * item.count).toFixed(2)}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        dispatch(decreaseCartItem(item.product.id))
                      }
                      className="border rounded px-2 cursor-pointer"
                    >
                      -
                    </button>

                    <span>{item.count}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseCartItem(item.product.id))
                      }
                      className="border rounded px-2 cursor-pointer"
                    >
                      +
                    </button>

                    <button
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                      className="ml-auto text-red-500 text-sm cursor-pointer"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 flex gap-3">
            <div className="p-4 border-t">
              <div className="flex justify-between font-bold">
                <span>Toplam</span>
                <span>₺{totalAmount.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/cart"
              className="flex-1 border rounded-md py-2 text-center font-medium hover:bg-gray-50 transition"
            >
              Sepete Git
            </Link>

            <Link
              disabled
              className="flex-1 bg-[#F28D35] text-white rounded-md py-2 text-center font-bold hover:opacity-90 transition"
            >
              Siparişi Tamamla
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartDropdown;
