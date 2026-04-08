export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setRoles = (roles) => {
  return {
    type: "SET_ROLES",
    payload: roles,
  };
};

export const setTheme = (theme) => {
  return {
    type: "SET_THEME",
    payload: theme,
  };
};

export const setLanguage = (language) => {
  return {
    type: "SET_LANGUAGE",
    payload: language,
  };
};