import React from "react";

const WeatherDetails = props => {
  const { name } = props.details;
  let { speed } = props.details.wind;
  let { temp, humidity } = props.details.main;
  speed = Math.round(speed * 3.6);
  temp = Math.round(temp);
  const description = props.details.weather[0].description;

  return (
    <div>
      <p>
        <span className="fas fa-location-arrow"></span> City: {name}
      </p>

      <p>
        <span className="fas fa-temperature-low"></span> Temperature: {temp}{" "}
        &#8451;
      </p>
      <p>
        <span className="fas fa-water"></span> Humidity: {humidity} %
      </p>

      <p>
        <span className="fas fa-wind"></span> Wind speed: {speed} Km/h
      </p>
      <p>
        <span className="fas fa-info"></span> Description: {description}
      </p>
    </div>
  );
};

export default WeatherDetails;
