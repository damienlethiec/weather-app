import React from "react";
import styled from "styled-components";
import SearchForm from "./../../molecules/SearchForm";
import H1 from "./../../atoms/H1";

const NavbarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.primary_color};
  color: #fff;
  padding: 5px;
`;

export default function Navbar(props) {
  return (
    <NavbarBox>
      <H1>Clever Title</H1>
      <SearchForm inline />
    </NavbarBox>
  );
}
