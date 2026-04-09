import api from "../../api/axios";
import { resetCheckout } from "../actions/shoppingCartActions";
import { setOrders } from "../actions/orderActions";

export const createOrder = (orderData) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/order", orderData);
      dispatch(resetCheckout());
      return response.data;
    } catch (error) {
      console.error("Order create error:", error);
      throw error;
    }
  };
};
export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("/order");
      console.log("orders response:", response.data);
      dispatch(setOrders(response.data));
    } catch (error) {
      console.log("Orders fetch error:", error);
    }
  };
};