import axios from "axios";
import { setRoles } from "../actions/clientActions";

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { client } = getState();

    if (client.roles && client.roles.length > 0) {
      return;
    }

    try {
      const response = await axios.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Roles alınamadı:", error);
    }
  };
};