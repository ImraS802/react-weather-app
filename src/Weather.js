import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "32f74cfde224610d71a804af24f60879";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app-wrapper">
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label for="staticCity2" className="sr-only"></label>
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label for="inputCity2" className="sr-only"></label>
              <input
                type="text"
                className="form-control shadow"
                id="input-city"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <button
                type="submit"
                className="btn btn-primary mb-2 shadow"
                id="search-button"
              >
                Search
              </button>
            </div>

            <button
              className="btn btn-success w-200 shadow"
              id="current-location-button"
            >
              via GPS
            </button>
          </form>
          <br />
          <h1>city={weatherData.city}</h1>
          <div className="weather-data">
            <div className="row">
              <div className="col-7">
                <div className="float-left">
                  <ul>
                    <li>Last updated: <FormattedDate date={weatherData.date} /> </li>
                    <li className="text-capitalize">
                      {weatherData.description}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-5">
                <ul>
                  <li>Humidity: {weatherData.humidity}% </li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="weather-icon">
              <div className="row">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
              </div>
            </div>
            <div className="temperature">
              {Math.round(weatherData.temperature)}
            </div>
            <span className="units">
              <a href="/">
                <strong className="celsius">°C</strong>
              </a>{" "}
              <strong className="unitSeperator"> | </strong>
              <a href="/">
                <strong className="fahrenheit">°F</strong>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
