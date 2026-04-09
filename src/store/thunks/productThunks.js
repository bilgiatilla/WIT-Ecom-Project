import api from "../../api/axios";
import { setCategories, setProductList, setTotal, setFetchState } from "../actions/productActions";

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    const { product } = getState();

    if (product.categories.length > 0) return;

    try {
      const response = await api.get("/categories");
      dispatch(setCategories(response.data));
    } catch (error) {
      console.error("Categories fetch error:", error);
    }
  };
};

export const fetchProducts = ({ categoryId = "", sort = "", filter = "" } = {}) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState("FETCHING"));
      const params = new URLSearchParams();

      if (categoryId) {
        params.append("category", categoryId);
      }

      if (filter) {
        params.append("filter", filter);
      }

      if (sort) {
        params.append("sort", sort);
      }

      
      const queryString = params.toString();
      const url = queryString ? `/products?${queryString}` : "/products";

      const response = await api.get(url);

      dispatch(setProductList(response.data.products));
      dispatch(setTotal(response.data.total));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Products fetch error:", error);
      dispatch(setFetchState("FAILED"));
    }
  };
};