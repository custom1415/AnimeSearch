import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { AnimeList } from "../../redux/Anime/Anime.selectors";
import Card from "../Card/Card.component";
import { CardListContainer } from "./CardList.styles";

const CardList = ({ Anime }) => {
  return (
    <CardListContainer>
      {Anime.map((anime) => (
        <Card key={anime.mal_id} {...anime}>{anime.title}</Card>
      ))}
    </CardListContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  Anime: AnimeList,
});

export default connect(mapStateToProps)(CardList);
