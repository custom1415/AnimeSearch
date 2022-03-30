import { createSelector } from "reselect";

const AnimeState = (state) => state.Anime;
const AnimeList = createSelector([AnimeState], (Anime) => Anime.Anime);
const GET_LOADING_STATE = createSelector(
  [AnimeState],
  (Loading) => Loading.Loading
);
export { AnimeList, GET_LOADING_STATE};
