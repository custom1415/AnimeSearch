import { ANIME_ACTION_TYPES } from "./Anime.types";

const INITIAL_STATE = { Anime: [], Loading: false, SearchQuery: "" };
export const AnimeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ANIME_ACTION_TYPES.LOADING:
      return { ...state, Loading: action.payload };
    case ANIME_ACTION_TYPES.ADD_ANIME:
      return { ...state, Anime: action.payload };
   
    default:
      return state;
  }
};
