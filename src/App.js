import React, { useState } from "react";
import { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import { fetchAnime, IsLoading } from "./redux/Anime/Anime.actions";
import { AnimeList, GET_LOADING_STATE } from "./redux/Anime/Anime.selectors";
import { withLoader } from "./withLoader";
import LoadSpinner from "./Loader";
import Navbar from "./components/Navbar/Navbar.component";
import CardList from "./components/CardList/CardList.component";
import { Query } from "./redux/Search/Search.selector";
function App({ Anime, Loading, LoadingState, SearchQuery }) {
  
  const [Load, setLoad] = useState(true);
  window.addEventListener("load", () => setLoad(false));
  console.log(SearchQuery);
  const DisplayWithLoader = withLoader(CardList);
  const GetAnime = useCallback(async () => {
    Loading(true);
    console.log(SearchQuery);
    try {
      const url = `https://api.jikan.moe/v3/search/anime?q=${
        SearchQuery ? SearchQuery : "One piece"
      }`;
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      const { results } = data;
      console.log(results);
      if (results) {
        Loading(false);
        Anime(results);
      }
    } catch (error) {
      console.log(error);
    }
  }, [SearchQuery]);
  useEffect(() => {
    GetAnime();
  }, [GetAnime, SearchQuery]);
  return (
    <>
      {Load ? (
        <LoadSpinner />
      ) : (
        <div className="App">
          <Navbar />
          <DisplayWithLoader IsLoading={LoadingState} />
        </div>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  Anime: (animes) => dispatch(fetchAnime(animes)),
  Loading: (bool) => dispatch(IsLoading(bool)),
});
const mapStateToProps = createStructuredSelector({
  LoadingState: GET_LOADING_STATE,
  AniList: AnimeList,
  SearchQuery: Query,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
