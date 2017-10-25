import React from "react";
import styled from "styled-components";
import H2 from "components/atoms/H2/index.js";
import WeatherImage from "components/atoms/WeatherImage/index.js";

const WeatherCardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 35px;
`;

export default function WeatherCard(props) {
  let icon = props.weather.weather[0].icon;
  return (
    <WeatherCardBox>
      <WeatherImage
        src={`${process.env
          .PUBLIC_URL}/assets/images/weather-icons/${icon}.svg`}
      />
      <H2>{props.weather.dt}</H2>
      {props.children}
    </WeatherCardBox>
  );
}
