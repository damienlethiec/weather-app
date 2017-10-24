import axios from "axios";
import dateFormat from "dateformat";

const ApiKey = "889f5f629234ffbc8c8fe3377f541fcb";
const BaseUrl = "http://api.openweathermap.org/data/2.5/";

var weatherNextDays = function getWeathers(city, days) {
  return callWeatherApi(city, days)
    .then(filterWeather)
    .then(getReadableDate);
};

function callWeatherApi(city, days) {
  return axios
    .get(
      `${BaseUrl}forecast?q=${city}&type=accurate&APPID=${ApiKey}&ctn=${days}`
    )
    .then(function(weathers) {
      return weathers.data.list;
    });
}

function filterWeather(weathers) {
  return weathers.filter(function(weather) {
    return inTheAfternoon(weather);
  });
}

function inTheAfternoon(weather) {
  let time = weather["dt"] * 1000;
  if (new Date().setHours(0, 0, 0, 0) === new Date(time).setHours(0, 0, 0, 0))
    return;
  let hours = new Date(time).getHours();
  return hours === 15;
}

function getReadableDate(weathers) {
  return weathers.map(function(weather) {
    weather["dt"] = makeDateReadable(weather["dt"] * 1000);
    return weather;
  });
}

function makeDateReadable(time) {
  return dateFormat(time, "dddd, mmmm dS, yyyy");
}

export default weatherNextDays;
