import React from "react";
import "./Main.css";
import { useState } from "react";
import ShowUi from "./ShowUi";
export default function Main() {
  const [state, setState] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };
  const handleClickSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5448d640821549d75fb1356b66569db0&units=metric`
    )
      .then((response) => {
        if (!response.ok)
          throw new Error(
            "Error in Fetching weather data. Error Status Code: " +
              response.status
          );
        return response.json();
      })
      .then((data) => {
        setState(data);
        setErr(null);
      })
      .catch((err) => {
        setErr(err);
        setState(null);
      })
      .finally(() => {
        setLoading(false);
      });
    setCity("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleClickSubmit(e);
  };
  return (
    <div className="Container">
      <div className="Top"></div>
      <h1>Weather Forecast</h1>
      <form onSubmit={handleClickSubmit}>
        <input
          type="text"
          name="weather"
          placeholder="Enter city name"
          onChange={handleChangeCity}
          onKeyDown={handleKeyDown}
          value={city}
        />
        <button type="submit">Search</button>
      </form>
      <br />
      <span className="Load">
        {loading && "Enter City or Place to see its weather."}
      </span>
      <span className="Error">{err && `Please Enter a Valid city Name`}</span>

      {state && state.main && <ShowUi data={state} />}
    </div>
  );
}
