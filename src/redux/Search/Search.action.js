import { SEARCH_ACTION_TYPES } from "./Search.types";

export const SearchQuery = (Search) => {
    console.log(Search);
    return {
      type: SEARCH_ACTION_TYPES.SEARCH,
      payload: Search,
    };
  };
  