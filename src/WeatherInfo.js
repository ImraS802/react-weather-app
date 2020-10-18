import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
      <div className="WeatherInfo">
          <h1>{props.data.city}</h1>
          <div className="weather-data">
            <div className="row">
              <div className="col-7">
                <div className="float-left">
                  <ul>
                    <li>Last updated: <FormattedDate date={props.data.date} /> </li>
                    <li className="text-capitalize">
                      {props.data.description}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-5">
                <ul>
                  <li>Humidity: {props.data.humidity}% </li>
                  <li>Wind: {props.data.wind} km/h</li>
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
                <div className="temperature"> 
            <WeatherTemperature celsius={props.data.temperature} /> 
           </div>
            </div>
          </div>
      </div>
       );
}