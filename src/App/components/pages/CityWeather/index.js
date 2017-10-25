import React, { Component } from "react";
import styled from "styled-components";
import queryString from "query-string";
import weatherNextDays from "./../../../utilities/functions/WeatherApi.js";
import Loading from "./../../atoms/Loading/index.js";
import WeatherGrid from "./../../organisms/WeatherGrid/index.js";

const CityWeatherBox = styled.div`
  color: blue;
`;

class CityWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weathers: null
    };
    this.updateWeathers = this.updateWeathers.bind(this);
  }
  updateWeathers(city) {
    weatherNextDays(this.state.value, 5).then(
      function(weathers) {
        this.setState(function() {
          return {
            weathers: weathers
          };
        });
      }.bind(this)
    );
  }
  componentDidMount() {
    const city = queryString.parse(this.props.location.search);
    this.updateWeathers(city);
  }
  render() {
    return (
      <CityWeatherBox>
        {!this.state.weathers ? (
          <Loading />
        ) : (
          <WeatherGrid weathers={this.state.weathers} />
        )}
      </CityWeatherBox>
    );
  }
}

export default CityWeather;
