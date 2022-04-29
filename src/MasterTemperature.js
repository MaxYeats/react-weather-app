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
          {Math.round(props.celsius)}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="MasterTemperature">
        <div className="main-temperature">
          {Math.round(fahrenheit)}
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </div>
      </div>
    );
  }
}
