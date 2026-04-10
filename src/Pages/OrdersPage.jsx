import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../store/thunks/orderThunks";

function OrdersPage() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const user = useSelector((state) => state.client.user);

  useEffect(() => {
    if (user && user.name) {
      dispatch(fetchOrders());
    }
  }, [dispatch, user]);

  return (
    <div className="px-4 py-8 lg:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#252B42] mb-8">
          My Orders
        </h1>

        <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200 bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#252B42] text-white">
                <th className="px-4 py-4 text-left font-semibold">Order ID</th>
                <th className="px-4 py-4 text-left font-semibold">Date</th>
                <th className="px-4 py-4 text-left font-semibold">
                  Total Price
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`border-t border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="px-4 py-4 font-medium text-[#252B42]">
                    #{order.id}
                  </td>
                  <td className="px-4 py-4 text-gray-600">
                    {new Date(order.order_date).toLocaleString("tr-TR")}
                  </td>
                  <td className="px-4 py-4 font-semibold text-[#23A6F0]">
                    {order.price}₺
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {orders.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            You have no orders yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default OrdersPage;