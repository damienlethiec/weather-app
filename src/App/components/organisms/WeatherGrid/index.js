import React from "react";
import styled from "styled-components";
import WeatherCard from "components/molecules/WeatherCard/index.js";

const WeatherGridBox = styled.div`
  flex-flow: row wrap;
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function WeatherGrid(props) {
  return (
    <WeatherGridBox>
      {props.weathers.map(function(weather) {
        return <WeatherCard key={weather.dt} weather={weather} />;
      })}
    </WeatherGridBox>
  );
}
