import React from "react";
import styled from "styled-components";
import Input from "./../../atoms/Input/index";
import Button from "./../../atoms/Button/index.js";

const SearchFormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${props =>
    props.inline &&
    `
    flex-direction: row;
  `};
`;

export default function SearchForm(props) {
  return (
    <SearchFormBox inline={props.inline}>
      <Input placeholder="St. George, Utah" />
      <Button green>Get Weather</Button>
    </SearchFormBox>
  );
}
