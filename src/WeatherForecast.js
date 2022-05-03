/** @format */

import React from "react";

import { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }

  const apiKey = "badf18efb01c292c50887b64f1fc7ebd";
  const units = "metric";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;

  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showForecast);

  //https://api.openweathermap.org/data/2.5/onecall?lat=40.7&lon=-74&exclude=hourly,daily&appid=badf18efb01c292c50887b64f1fc7ebd
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={48} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-tempmin">10°</span>
            <span className="WeatherForecast-tempmax">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
