import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
      <div className="WeatherInfo">
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
                <div className="float-left">
                <WeatherIcon code={props.data.icon} />
                </div>
              </div>
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
            
          </div>
      </div>
       );
}