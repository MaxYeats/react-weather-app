/** @format */

import React from "react";

import axios from "axios";

import "./App.css";

import { SpinnerDotted } from "spinners-react";

import { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  const [city, setCity] = useState("");

  const [loaded, setLoaded] = useState(false);
  //or eliminate line above and below could be: const [weather, setWeather ] = useState({loaded:false});

  const [weather, setWeather] = useState({});

  function startSearch(event) {
    event.preventDefault();

    const apiKey = "a448a6f6f79e148d051f6f0d8067a5ae";

    const units = "metric";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(findWeather);
  }

  function findCity(event) {
    setCity(event.target.value);
  }

  function findWeather(response) {
    //console.log(response.data);

    setLoaded(true);

    setWeather({
      city: response.data.name,
      coordinates: response.data.coord,

      temperature: response.data.main.temp,

      tempmax: response.data.main.temp_max,

      tempmin: response.data.main.temp_min,

      description: response.data.weather[0].description,

      humidity: response.data.main.humidity,

      wind: response.data.wind.speed,
      //see line 19, there could be another state, loaded:true,

      date: new Date(response.data.dt * 1000),

      icon: response.data.weather[0].icon,
    });
  }

  let form = (
    <form className="react-form" onSubmit={startSearch}>
      <input
        className="react-input"
        type="search"
        placeholder="Enter your city here"
        autoComplete="false"
        autoFocus="on"
        onChange={findCity}
      ></input>

      <input className="search-button" type="submit" value="Search"></input>
    </form>
  );
  let soccerballGif = require("./icons8-soccer-ball1.gif");

  let walkingGif = require("./icons8-walking1.gif");

  if (loaded) {
    //see line 19, it could be: if (weather.loaded){}
    return (
      <div className="Weather">
        {form}
        <div className="row">
          <div className="col-1">
            <img src={walkingGif} alt="Walking icon by Icons8"></img>
          </div>
          <div className="col-10">
            <WeatherInfo data={weather} />
          </div>
          <div className="col-1">
            <img src={soccerballGif} alt="Soccer Ball icon by Icons8"></img>
          </div>
        </div>
        <div>
          <WeatherForecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}

        <SpinnerDotted size="40%" thickness="20" color="#fff" speed="50" />
      </div>
    );
  }

  //return <SpinnerRoundOutlined size="30%" thickness="30" color="5EE6EB" />;
}

//<img src={weather.icon} alt={weather.description}/>
