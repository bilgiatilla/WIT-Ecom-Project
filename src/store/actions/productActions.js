export const setCategories = (category) => {
  return {
    type: "SET_CATEGORIES",
    payload: category,
  };
};

export const setProductList = (product) => {
  return {
    type: "SET_PRODUCT_LIST",
    payload: product,
  };
};

export const setTotal = (total) => {
  return {
    type: "SET_TOTAL",
    payload: total,
  };
};

export const setFetchState = (fetch) => {
  return {
    type: "SET_FETCH_STATE",
    payload: fetch,
  };
};

export const setLimit = (limit) => {
  return {
    type: "SET_LIMIT",
    payload: limit,
  };
};

export const setOffset = (offset) => {
  return {
    type: "SET_OFFSET",
    payload: offset,
  };
};

export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    payload: filter,
  };
};