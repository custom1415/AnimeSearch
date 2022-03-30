import React from "react";
import { BiHeart } from "react-icons/bi";
import {
  Bottom,
  CardContainer,
  Img,
  Title,
  Type,
  Middle,
  Score,
  ScoreCont,
  Sc,
} from "./Card.styles";
const Card = ({ title, synopsis, image_url, url, type, score, end_date }) => {
  let dt;
  if (end_date) {
    dt = end_date.split("-")[0];
  }
  return (
    <CardContainer
      onClick={() => {
        window.location.href = `${url}`;
      }}
    >
      <Img src={image_url} alt="" />
      <Middle>
        <Title>{title}</Title>
        <ScoreCont>
          <Sc>Score</Sc>
          <Score>{score}</Score>
        </ScoreCont>
      </Middle>
      <Bottom>
        <Type>{type}</Type>

        <Type>{dt ? dt : "Airing"}</Type>
      </Bottom>
    </CardContainer>
  );
};
export default Card;
