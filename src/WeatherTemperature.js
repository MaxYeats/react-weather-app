/** @format */

import React from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  return (
    <div className="main-temperature">
      {Math.round(props.celsius)}
      <span className="temp-units">°C</span>
    </div>
  );
}
