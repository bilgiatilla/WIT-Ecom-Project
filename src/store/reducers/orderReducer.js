const initialState = {
  orders: [],
};

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, orders: action.payload };
    default:
      return state;
  }
}
export default orderReducer;