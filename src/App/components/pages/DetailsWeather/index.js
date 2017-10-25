import React from "react";
import WeatherCard from "./../../molecules/WeatherCard/index.js";
import WeatherInfos from "./../../molecules/WeatherInfos/index.js";

export default function DetailsWeather(props) {
  var city = props.location.pathname.split("/")[2];
  var weather = props.location.state.weather;
  return (
    <div>
      <WeatherCard weather={weather}>
        <WeatherInfos weather={weather} city={city} />
      </WeatherCard>
    </div>
  );
}
