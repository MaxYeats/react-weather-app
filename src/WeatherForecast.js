/** @format */

import React from "react";

import { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
