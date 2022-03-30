import React from "react";
import { Container, Img, leftContainer as Right } from "./Navbar.style";
import Search from "../Search/Search.component";
import { BiSearchAlt, BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.png";
const Navbar = () => {
  const nav = useNavigate();
  return (
    <Container>
      <Img src={logo} onClick={() => nav("/")} />
      <Search />
    </Container>
  );
};
export default Navbar;
