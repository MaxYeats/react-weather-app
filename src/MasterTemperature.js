/** @format */

import React from "react";
import { useState } from "react";
import "./App.css";
export default function MasterTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="MasterTemperature">
        <div className="main-temperature">
          {" "}
          {Math.round(props.celsius)}
          <span className="temp-units">
            <a>°C</a> |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>

        <div className="minmax-temp">
          Min. {Math.round(props.min)}°C | Max. {""}
          {Math.round(props.max)}°C{" "}
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    let minimumfahrenheit = (props.min * 9) / 5 + 32;
    let maximumfahrenheit = (props.max * 9) / 5 + 32;

    return (
      <div className="MasterTemperature">
        <div className="main-temperature">
          {Math.round(fahrenheit)}
          <span className="temp-units">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            |<a>°F</a>
          </span>
        </div>

        <div className="minmax-temp">
          Min. {Math.round(minimumfahrenheit)}°F | Max. {""}
          {Math.round(maximumfahrenheit)}°F{" "}
        </div>
      </div>
    );
  }
}
