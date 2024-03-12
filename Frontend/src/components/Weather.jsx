import React, { useState, useEffect } from "react";

function Weather({
  getWeatherData,
  temp,
  place,
  address,
  humidity,
  condition,
  day,
  time,
  conditionIcon,
  visibility,
  wind,
}) {
  const [cityName, setCityName] = useState("");
  const getCity = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="pt-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getWeatherData(cityName);
        }}
      >
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex rounded-md overflow-hidden w-full">
              <input
                type="text"
                name="City"
                id="City"
                className="w-full rounded-md rounded-r-none"
                onChange={getCity}
                placeholder="Enter city name..."
              />
              <button
                className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md"
                htmlFor="City"
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </form>

      {condition ? (
        <div className="max-w-md mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
          <div className="min-h-64 pt-5 flex items-center justify-center">
            <div className="flex flex-col bg-white bg-opacity-75 rounded-lg p-4 w-full max-w-xs">
              <div className="font-bold text-xl">{place}</div>
              <div className="text-sm text-gray-500">{time}</div>
              <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                {conditionIcon ? <img src={conditionIcon}></img> : <p></p>}
              </div>
              <div className="flex flex-row items-center justify-center mt-6">
                <div className="font-medium text-6xl">{temp}</div>
                <div className="flex flex-col items-center ml-6">
                  <div>{condition}</div>
                  <div className="mt-1">
                    <span className="text-sm">
                      <i className="far fa-long-arrow-up" />
                    </span>
                    <span className="text-sm font-light text-gray-500">
                      {day}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Wind</div>
                  <div className="text-sm text-gray-500">{wind}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Humidity</div>
                  <div className="text-sm text-gray-500">{humidity}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Visibility</div>
                  <div className="text-sm text-gray-500">{visibility}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Weather;
