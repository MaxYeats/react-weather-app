/** @format */

import React from "react";

import axios from "axios";

import "./App.css";

//import { SpinnerDotted } from "spinners-react";

import { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import background from "./soccerfield5.png";

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
  let soccerballGif2 = require("./icons8-soccer-ball.gif");

  let soccerGirl = require("./girl2.png");
  //let soccerfield = require("./soccerfield3.png");
  if (loaded) {
    //see line 19, it could be: if (weather.loaded){}
    return (
      <div className="Weather">
        {form}
        <div className="row" id="Weather-data-border">
          <div className="col">
            <WeatherInfo data={weather} />
            <img
              src={soccerGirl}
              alt="Girl playing soccer"
              className="soccergirl"
            ></img>
            <img
              src={soccerballGif}
              alt="Soccer Ball icon by Icons8"
              className="soccerball1"
            ></img>
          </div>
        </div>
        <div className="WeatherForecast-border">
          <WeatherForecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="first-page"
        style={{ backgroundImage: `url(${background})` }}
      >
        {form}
        <img
          src={soccerballGif2}
          alt="Soccer Ball icon by Icons8"
          className="soccerball2"
        />
      </div>
    );
  }
}

//<img src={weather.icon} alt={weather.description}/>
//<SpinnerDotted size="40%" thickness="20" color="#fff" speed="50" />
//return <SpinnerRoundOutlined size="30%" thickness="30" color="5EE6EB" />;
