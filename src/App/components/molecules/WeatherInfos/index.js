import React from "react";
import styled from "styled-components";
import convertTemp from "./../../../utilities/functions/converters.js";

const WeatherInfosBox = styled.div`
  font-size: 34px;
  font-weight: 100;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

export default function WeatherInfos(props) {
  return (
    <WeatherInfosBox>
      <p>{props.city}</p>
      <p>{props.weather.weather[0].description}</p>
      <p>min temp: {convertTemp(props.weather.main.temp_min)} degrees</p>
      <p>max temp: {convertTemp(props.weather.main.temp_max)} degrees</p>
      <p>humidity: {props.weather.main.humidity}</p>
    </WeatherInfosBox>
  );
}
