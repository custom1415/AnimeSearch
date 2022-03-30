import { ANIME_ACTION_TYPES } from "./Anime.types";

export const fetchAnime = (anime) => {
  return {
    type: ANIME_ACTION_TYPES.ADD_ANIME,
    payload: anime,
  };
};
export const IsLoading = (bool) => {
  return {
    type: ANIME_ACTION_TYPES.LOADING,
    payload: bool,
  };
};
