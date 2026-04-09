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
    <div className="p-6 lg:max-w-160 text-center">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      <table className="w-full border border-gray-300 border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Order ID</th>
            <th className="border p-2 text-left">Date</th>
            <th className="border p-2 text-left">Total Price</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{new Date(order.order_date).toLocaleString("tr-TR")}</td>
              <td className="border p-2">{order.price}₺</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;