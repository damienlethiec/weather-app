import React from "react";
import styled from "styled-components";
import Background from "./assets/pattern.svg";
import H1 from "./../../atoms/H1/index.js";
import SearchForm from "./../../molecules/SearchForm/index.js";

const HomeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  flex-direction: column;
  background-image: url(${Background});
`;

export default function Home(props) {
  return (
    <HomeBox>
      <H1 heading>Enter a City and State</H1>
      <SearchForm />
    </HomeBox>
  );
}
