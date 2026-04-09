export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";


export const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};

export const setProductList = (product) => {
  return {
    type: SET_PRODUCT_LIST,
    payload: product,
  };
};

export const setTotal = (total) => {
  return {
    type: SET_TOTAL,
    payload: total,
  };
};

export const setFetchState = (fetchState) => {
  return {
    type: SET_FETCH_STATE,
    payload: fetchState,
  };
};

export const setLimit = (limit) => {
  return {
    type: SET_LIMIT,
    payload: limit,
  };
};

export const setOffset = (offset) => {
  return {
    type: SET_OFFSET,
    payload: offset,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

