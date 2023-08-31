import React, { useState, useEffect } from "react";
import "./ShowUi.css";
import imageDc from "./images/Day/Cloud.png";
import imageDr from "./images/Day/Rain.png";
import imageDt from "./images/Day/Thunderstorm.png";
import imageDcl from "./images/Day/Clear.png";
import imageDd from "./images/Day/Drizlle.png";
import imageNc from "./images/Night/Cloud.png";
import imageNr from "./images/Night/Rain.png";
import imageNt from "./images/Night/Thunderstorm.png";
import imageNcl from "./images/Night/Clear.png";
import imageNd from "./images/Night/Drizzle.png";
import imageDh from "./images/Night/Haze.png";
import imagecold from "./images/Night/Cold.png";
import imagep from "./images/Night/Pressure.png";
import imageh from "./images/Night/Humidity.png";
import images from "./images/Night/speed.png";
import imagev from "./images/Night/visible.png";
export default function ShowUi(props) {
  const [weatherDescription, setWeatherDescription] = useState("");
  const [isDay, setIsDay] = useState(true);

  const sunriseTime = props.data.sys.sunrise * 1000;
  const sunsetTime = props.data.sys.sunset * 1000;
  const currentTime = new Date().getTime();

  //const timezoneOffset = props.data.timezone * 1000;

  useEffect(() => {
    setWeatherDescription(props.data.weather[0].description.toLowerCase());
    setIsDay(currentTime >= sunriseTime && currentTime <= sunsetTime);
  }, [props.data.weather, sunriseTime, sunsetTime, currentTime]);
  return (
    <div className="Content">
      <article>
        Right Now in
        <span className="Black">
          {"  "}
          {props.data.name}
        </span>
        , it's {props.data.weather[0].description}
      </article>
      <div className="Imagew">
        {Math.floor(props.data.main.temp) <= 8 ? (
          <img src={imagecold} alt="Too Cold" />
        ) : isDay ? (
          weatherDescription.includes("clear") ? (
            <img src={imageDcl} alt="Clear Day" />
          ) : weatherDescription.includes("cloud") ? (
            <img src={imageDc} alt="Cloudy Day" />
          ) : weatherDescription.includes("rain") ? (
            <img src={imageDr} alt="Rainy Day" />
          ) : weatherDescription.includes("thunderstorm") ? (
            <img src={imageDt} alt="Thunderstorm Day" />
          ) : weatherDescription.includes("thunderstorm") ? (
            <img src={imageDt} alt="Thunderstorm Day" />
          ) : weatherDescription.includes("fog") ? (
            <img src={imageDh} alt="Thunderstorm Day" />
          ) : weatherDescription.includes("drizzle") ? (
            <img src={imageDd} alt="Thunderstorm Day" />
          ) : weatherDescription.includes("mist") ? (
            <img src={imageDh} alt="Thunderstorm Day" />
          ) : weatherDescription.includes("haze") ? (
            <img src={imageDh} alt="Thunderstorm Day" />
          ) : (
            <img src={imageDc} alt="Cloudy Day" />
          )
        ) : weatherDescription.includes("clear") ? (
          <img src={imageNcl} alt="Clear Day" />
        ) : weatherDescription.includes("cloud") ? (
          <img src={imageNc} alt="Cloudy Day" />
        ) : weatherDescription.includes("rain") ? (
          <img src={imageNr} alt="Rainy Day" />
        ) : weatherDescription.includes("thunderstorm") ? (
          <img src={imageNt} alt="Thunderstorm Day" />
        ) : weatherDescription.includes("fog") ? (
          <img src={imageDh} alt="Thunderstorm Day" />
        ) : weatherDescription.includes("drizzle") ? (
          <img src={imageNd} alt="Thunderstorm Day" />
        ) : weatherDescription.includes("mist") ? (
          <img src={imageDh} alt="Thunderstorm Day" />
        ) : weatherDescription.includes("haze") ? (
          <img src={imageDh} alt="Thunderstorm Day" />
        ) : (
          <img src={imageNc} alt="Cloudy Day" />
        )}
        <span className="Temp">{Math.floor(props.data.main.temp)}</span>°C
      </div>
      <div className="tabledata">
        <span>
          Min°/Max°
          <br />
          <span className="actualData">
            {Math.floor(props.data.main.temp_min)}/
            {Math.ceil(props.data.main.temp_max)}
          </span>
        </span>

        <span>
          <img src={imagev} alt="not found" />
          Visibility
          <br />
          <span className="actualData">{props.data.visibility / 1000}</span>km
        </span>
        <span>
          <img src={imagep} alt="not found" />
          Pressure
          <br />
          <span className="actualData">{props.data.main.pressure}</span>hpa
        </span>
        <span>
          <img src={imageh} alt="not found" />
          Humidity
          <br />
          <span className="actualData">{props.data.main.humidity}</span>%
        </span>
        <span>
          <img src={images} alt="not found" />
          Wind Speed
          <br />
          <span className="actualData">{props.data.main.humidity}</span>
          m/s
        </span>
      </div>
    </div>
  );
}
