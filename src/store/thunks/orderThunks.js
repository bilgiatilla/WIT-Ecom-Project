import api from "../../api/axios";
import { resetCheckout } from "../actions/shoppingCartActions";

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