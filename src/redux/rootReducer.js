import { combineReducers } from "redux";
import { AnimeReducer } from "./Anime/Anime.reducers";
import { SearchReducer } from "./Search/Search.reducer";

export const rootReducer = combineReducers({
  Anime: AnimeReducer,
  Search: SearchReducer,
});
