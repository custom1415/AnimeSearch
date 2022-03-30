import React from "react";
import { InputComp, Container,Bttn } from "./Search.styles";
import { BiSearchAlt } from "react-icons/bi";
import { connect } from "react-redux";
import { SearchQuery } from "../../redux/Search/Search.action";

function Search({ SearchQ }) {
  let Q = "";
  const handleChange = (e) => {
    Q = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    SearchQ(Q);
  };
  return (
    <Container onSubmit={handleSubmit}>
      <InputComp
        type="text"
        placeholder="Search Anime"
        onChange={handleChange}
      />
      <Bttn type="submit">
        <BiSearchAlt
          style={{
            // fontSize: "24px",
            // cursor: "pointer",
            color: "white",
          
          }}
        />
      </Bttn>
    </Container>
  );
}
const mapDispatch = (dispatch) => ({
  SearchQ: (query) => dispatch(SearchQuery(query)),
});
export default connect(null, mapDispatch)(Search);
