import { SEARCH_ACTION_TYPES } from "./Search.types";

const INITIAL_STATE = { SearchQuery: "One Piece" };
export const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_ACTION_TYPES.SEARCH:
      return { SearchQuery: action.payload };
    default:
      return state;
  }
};
