import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import orderReducer from "./orderReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  order: orderReducer,
  favorites: favoritesReducer,
});

export default rootReducer;