/** @format */

import FormattedDate from "./FormattedDate";

import React from "react";

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
        <div className="col-3"></div>

        <div className="col-3">
          <div className="main-temperature">
            {Math.round(props.data.temperature)}°C
          </div>

          <div className="minmax-temp">
            Min.{Math.round(props.data.tempmin)}°C | Max.
            {Math.round(props.data.tempmax)}°C{" "}
          </div>
        </div>

        <div className="col-3">
          <div className="icon">
            <img src={props.data.icon} alt={props.description} />
          </div>

          <div className="description">{props.data.description}</div>

          <div className="humidity">Humidity: {props.data.humidity}%</div>

          <div className="wind">Wind: {Math.round(props.data.wind)} m/s</div>
        </div>

        <div className="col-3"></div>
      </div>
    </div>
  );
}
