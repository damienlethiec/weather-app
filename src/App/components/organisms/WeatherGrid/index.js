import React from "react";
import styled from "styled-components";

const WeatherGridBox = styled.ul`
  color: blue;
`;

export default function WeatherGrid(props) {
  return (
    <WeatherGridBox>
      {props.weathers.map(function(weather) {
        return <li>{weather.dt}</li>;
      })}
    </WeatherGridBox>
  );
}
