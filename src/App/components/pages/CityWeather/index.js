import React, { Component } from "react";
import queryString from "query-string";
import { startCase } from "lodash";
import weatherNextDays from "utilities/functions/WeatherApi.js";
import Loading from "components/atoms/Loading/index.js";
import WeatherGrid from "components/organisms/WeatherGrid/index.js";
import H1 from "components/atoms/H1/index.js";

class CityWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weathers: null,
      city: null
    };
    this.updateWeathers = this.updateWeathers.bind(this);
  }
  updateWeathers(city) {
    weatherNextDays(city, 5).then(
      function(weathers) {
        this.setState(function() {
          return {
            city: city,
            weathers: weathers
          };
        });
      }.bind(this)
    );
  }
  componentDidMount() {
    var city = startCase(queryString.parse(this.props.location.search).city);
    this.updateWeathers(city);
  }
  componentWillReceiveProps(nextProps) {
    var city = startCase(queryString.parse(nextProps.location.search).city);
    this.updateWeathers(city);
  }
  render() {
    return (
      <div>
        {!this.state.weathers ? (
          <Loading />
        ) : (
          <div>
            <H1 forecast_header>{this.state.city}</H1>
            <WeatherGrid weathers={this.state.weathers} />
          </div>
        )}
      </div>
    );
  }
}

export default CityWeather;
