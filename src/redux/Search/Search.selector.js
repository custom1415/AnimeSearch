import { createSelector } from "reselect";

const AnimeState = (state) => state.Search;

const Query = createSelector([AnimeState], (Loading) => Loading.SearchQuery);
export { Query };
