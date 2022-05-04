/** @format */

import React from "react";

import { useState } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "badf18efb01c292c50887b64f1fc7ebd";
    const units = "metric";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;

    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    //https://api.openweathermap.org/data/2.5/onecall?lat=40.7&lon=-74&exclude=hourly,daily&appid=badf18efb01c292c50887b64f1fc7ebd

    return null;
  }
}
