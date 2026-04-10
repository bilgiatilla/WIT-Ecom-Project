import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";
import rootReducer from "./reducers/rootReducer";

const loadFavoritesFromLocalStorage = () => {
  try {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  } catch (error) {
    return [];
  }
};

const preloadedState = {
  favorites: {
    favorites: loadFavoritesFromLocalStorage(),
  },
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  try {
    const favorites = store.getState().favorites.favorites;
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error("Favorites could not be saved:", error);
  }
});
export default store;