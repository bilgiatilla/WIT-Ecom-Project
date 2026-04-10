export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SET_FAVORITES = "SET_FAVORITES";
export const CLEAR_FAVORITES = "CLEAR_FAVORITES";

export const toggleFavorite = (product) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: product,
  };
};

export const removeFavorite = (productId) => {
  return {
    type: REMOVE_FAVORITE,
    payload: productId,
  };
};

export const setFavorites = (favorites) => {
  return {
    type: SET_FAVORITES,
    payload: favorites,
  };
};

export const clearFavorites = () => {
  return {
    type: CLEAR_FAVORITES,
  };
};