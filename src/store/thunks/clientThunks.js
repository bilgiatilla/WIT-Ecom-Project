import api from "../../api/axios";
import { clearUser, setRoles, setUser } from "../actions/clientActions";


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
