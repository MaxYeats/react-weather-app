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
          <span className="big-temperature">{Math.round(props.celsius)}</span>
          <span className="temp-units">
            <a href="/" className="inactive">
              °C
            </a>{" "}
            |{" "}
            <a href="/" onClick={showFahrenheit} className="active">
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
          <span className="big-temperature">{Math.round(fahrenheit)}</span>
          <span className="temp-units">
            <a href="/" onClick={showCelsius} className="active">
              °C
            </a>{" "}
            |
            <a className="inactive" href="/">
              °F
            </a>
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
