export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
export const SET_CREDIT_CARDS = "SET_CREDIT_CARDS";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const setAddressList = (addressList) => {
  return {
    type: SET_ADDRESS_LIST,
    payload: addressList,
  };
};

export const setCreditCards = (creditCards) => {
  return {
    type: SET_CREDIT_CARDS,
    payload: creditCards,
  };
};

export const setRoles = (roles) => {
  return {
    type: SET_ROLES,
    payload: roles,
  };
};

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};