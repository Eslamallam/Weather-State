import React, { useState, useEffect } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ax from "axios";
import WeatherDetails from "./WeatherDetails";
import "../styles/main.css";

const WeatherForm = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [error, setError] = useState(false);

  const handleCountryChange = val => {
    setCountry(val);
  };

  const handleRegionChange = val => {
    setRegion(val);
  };

  useEffect(() => {
    if (region) {
      ax.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${region}&units=metric&appid=cdaec7ddf2cad8f52e2af566ea8ed0a0`
      )
        .then(res => {
          setError(false);
          setWeatherDetails(res.data);
          console.log(res.data);
        })
        .catch(err => {
          if (
            (err && err.response.status === 404) ||
            (err && err.response.status === 500)
          ) {
            setError(true);
          }
        });
    }
  }, [region]);

  return (
    <div className="weather-box">
      <h5>Select below to get weather state</h5>
      <div className="select-country">
        <CountryDropdown
          value={country}
          onChange={val => handleCountryChange(val)}
        />
      </div>
      <div className="select-region">
        <RegionDropdown
          country={country}
          value={region}
          onChange={val => handleRegionChange(val)}
        />
      </div>
      <div className="details">
        {error ? (
          <div className="error">
            <p>Sorry, something went wrong</p>
          </div>
        ) : (
          weatherDetails && <WeatherDetails details={weatherDetails} />
        )}
      </div>
    </div>
  );
};

export default WeatherForm;
