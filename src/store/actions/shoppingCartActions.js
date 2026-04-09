export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";
export const DECREASE_CART_ITEM = "DECREASE_CART_ITEM";
export const TOGGLE_CART_ITEM = "TOGGLE_CART_ITEM";
export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const RESET_CHECKOUT = "RESET_CHECKOUT";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const increaseCartItem = (productId) => {
  return {
    type: INCREASE_CART_ITEM,
    payload: productId,
  };
};

export const decreaseCartItem = (productId) => {
  return {
    type: DECREASE_CART_ITEM,
    payload: productId,
  };
};

export const toggleCartItem = (productId) => {
  return {
    type: TOGGLE_CART_ITEM,
    payload: productId,
  };
};

export const setCart = (cart) => {
  return {
    type: SET_CART,
    payload: cart,
  };
};

export const setPayment = (payment) => {
  return {
    type: SET_PAYMENT,
    payload: payment,
  };
};

export const setAddress = (address) => {
  return {
    type: SET_ADDRESS,
    payload: address,
  };
};

export const resetCheckout = () => {
  return {
    type: RESET_CHECKOUT,
  };
};