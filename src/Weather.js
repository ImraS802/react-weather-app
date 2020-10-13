import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 26,
    date: "Sunday, 08:15",
    description: "Sunny",
    imgUrl:
      "https://seekpng.com/png/detail/2-22841_emoji-sun-and-png-image-transparent-background-sun.png",
    humidity: 20,
    wind: 3,
  };

  return (
    <div className="weather-app-wrapper">
      <div className="Weather">
        <form className="form-inline">
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
        <h1>{weatherData.city}</h1>
        <div className="weather-data">
          <div className="row">
            <div className="col-7">
              <div className="float-left">
                <ul>
                  <li>Last updated: {weatherData.date}</li>
                  <li>{weatherData.description}</li>
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
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
            </div>
          </div>
          <div className="temperature">{weatherData.temperature}</div>
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
}
