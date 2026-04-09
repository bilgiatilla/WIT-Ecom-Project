import api from "../../api/axios";
import { clearUser, setRoles, setUser, setAddressList, setCreditCards } from "../actions/clientActions";


export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { client } = getState();

    if (client.roles && client.roles.length > 0) {
      return;
    }

    try {
      const response = await api.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Roles alınamadı:", error);
    }
  };
};
export const loginUser = (formData, navigate, from) => {
  return async (dispatch) => {
    try {
      const res = await api.post("/login", {
        email: formData.email,
        password: formData.password,
      });
      const token = res.data.token;

      const userData = {
        name: res.data.name,
        email: res.data.email,
        role_id: res.data.role_id,
      };
      api.defaults.headers.common["Authorization"] = token;

      dispatch(setUser(userData));

      if (formData.rememberMe) {
        localStorage.setItem("token", token);
      }

      navigate(from || "/");
    } catch (error) {
      throw error;
    }
  };
};

export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      api.defaults.headers.common["Authorization"] = token;

      const res = await api.get("/verify");

      const newToken = res.data.token || token;

      const userData = {
        name: res.data.name,
        email: res.data.email,
        role_id: res.data.role_id,
      };

      dispatch(setUser(userData));

      localStorage.setItem("token", newToken);
      api.defaults.headers.common["Authorization"] = newToken;
    } catch (error) {
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
      dispatch(clearUser());
    }
  };
};
export const fetchAddresses = () => {
  return async (dispatch) => {
    try {
      const res = await api.get("/user/address");
      dispatch(setAddressList(res.data));
    } catch (error) {
      console.error("Adresler alınamadı:", error);
      throw error;
    }
  };
};

export const addAddress = (addressData) => {
  return async (dispatch) => {
    try {
      await api.post("/user/address", addressData);
      dispatch(fetchAddresses());
    } catch (error) {
      console.error("Adres eklenemedi:", error);
      throw error;
    }
  };
};

export const updateAddress = (addressData) => {
  return async (dispatch) => {
    try {
      await api.put("/user/address", addressData);
      dispatch(fetchAddresses());
    } catch (error) {
      console.error("Adres güncellenemedi:", error);
      throw error;
    }
  };
};

export const deleteAddress = (addressId) => {
  return async (dispatch) => {
    try {
      await api.delete(`/user/address/${addressId}`);
      dispatch(fetchAddresses());
    } catch (error) {
      console.error("Adres silinemedi:", error);
      throw error;
    }
  };
};
export const fetchCreditCards = () => {
  return async (dispatch) => {
    try {
      const res = await api.get("/user/card");
      dispatch(setCreditCards(res.data));
    } catch (error) {
      console.error("Kartlar alınamadı:", error);
      throw error;
    }
  };
};

export const addCreditCard = (cardData) => {
  return async (dispatch) => {
    try {
      await api.post("/user/card", cardData);
      dispatch(fetchCreditCards());
    } catch (error) {
      console.error("Kart eklenemedi:", error);
      throw error;
    }
  };
};

export const updateCreditCard = (cardData) => {
  return async (dispatch) => {
    try {
      await api.put("/user/card", cardData);
      dispatch(fetchCreditCards());
    } catch (error) {
      console.error("Kart güncellenemedi:", error);
      throw error;
    }
  };
};

export const deleteCreditCard = (cardId) => {
  return async (dispatch) => {
    try {
      await api.delete(`/user/card/${cardId}`);
      dispatch(fetchCreditCards());
    } catch (error) {
      console.error("Kart silinemedi:", error);
      throw error;
    }
  };
};