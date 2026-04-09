import api from "../../api/axios";
import { setCategories, setProductList, setTotal, setFetchState, setProductDetail, } from "../actions/productActions";

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

export const fetchProducts = ({ categoryId = "", sort = "", filter = "", limit = 25, offset = 0 } = {}) => {
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
      params.append("limit", limit);
      params.append("offset", offset);

      const queryString = params.toString();
      const url = `/products?${queryString}`;

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

export const fetchProductDetail = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState("FETCHING"));
      dispatch(setProductDetail(null));

      const response = await api.get(`/products/${productId}`);

      dispatch(setProductDetail(response.data));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Product detail fetch error:", error);
      dispatch(setFetchState("FAILED"));
    }
  };
};