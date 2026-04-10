import {
  TOGGLE_FAVORITE,
  REMOVE_FAVORITE,
  SET_FAVORITES,
  CLEAR_FAVORITES,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
};

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const product = action.payload;
      const exists = state.favorites.find((item) => item.id === product.id);

      if (exists) {
        return {
          ...state,
          favorites: state.favorites.filter((item) => item.id !== product.id),
        };
      }

      return {
        ...state,
        favorites: [...state.favorites, product],
      };
    }

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload
        ),
      };

    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };

    case CLEAR_FAVORITES:
      return initialState;

    default:
      return state;
  }
}

export default favoritesReducer;