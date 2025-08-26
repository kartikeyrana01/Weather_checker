import { useState } from "react";
import Infobox from "./infobox";
import SearchBox from "./SearchBox";
import './index.css';

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "rohini",
    feelsLike: 40.54,
    humidity: 57,
    temp: 33.84,
    tempMax: 33.84,
    tempMin: 33.84,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-teal-400 flex flex-col items-center pt-8 px-4">
      <h2 className="text-center font-bold text-3xl mb-6 text-white">
        Weather App by Kartikey Rana
      </h2>

      <SearchBox updateInfo={updateInfo} />
      <Infobox info={weatherInfo} />
    </div>
  );
}
