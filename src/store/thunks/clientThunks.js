import axios from "axios";
import api from "../../api/axios";
import { setRoles, setUser } from "../actions/clientActions";


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

      const userData = {
        name: res.data.name,
        email: res.data.email,
        role_id: res.data.role_id,
      };

      dispatch(setUser(userData));

      if (formData.rememberMe) {
        localStorage.setItem("token", res.data.token);
      }

      navigate(from || "/");
    } catch (error) {
      throw error;
    }
  };
};