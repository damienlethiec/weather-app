import React from "react";
import styled from "styled-components";
import Input from "./../../atoms/Input/index";
import Button from "./../../atoms/Button/index.js";

const SearchFormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export default function SearchForm(props) {
  return (
    <SearchFormBox>
      <Input placeholder="St Georges, Utah" />
      <Button green>Get Weather</Button>
    </SearchFormBox>
  );
}
