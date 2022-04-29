/** @format */
import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import MasterTemperature from "./MasterTemperature";

import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="city-name">{props.data.city}</div>

      <div className="date-time">
        <span>
          <FormattedDate date={props.data.date} />
        </span>
      </div>

      <div className="row">
        <div className="col-6">
          <MasterTemperature
            celsius={props.data.temperature}
            min={props.data.tempmin}
            max={props.data.tempmax}
          />
        </div>

        <div className="col-6">
          <div className="icon">
            <WeatherIcon code={props.data.icon} />
          </div>

          <div className="description">{props.data.description}</div>

          <div className="humidity">Humidity: {props.data.humidity}%</div>

          <div className="wind">Wind: {Math.round(props.data.wind)} m/s</div>
        </div>
      </div>
    </div>
  );
}
