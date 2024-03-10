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
        <div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between space-x-8">
            <div className="flex flex-col items-center">
              {conditionIcon ? <img src={conditionIcon}></img> : <p></p>}
              <h1 className="text-xl font-semibold">{place}</h1>
            </div>
            <div>
              <span className="font-bold ">{temp}</span>
            </div>
            <div>
              <span className="font-bold ">{humidity}</span>
            </div>
            <div>
              <span className="font-bold ">{address}</span>
            </div>
            <div>
              <span className="font-bold ">{condition}</span>
            </div>
            <div>
              <span className="font-bold ">{day}</span>
            </div>
            <div>
              <span className="font-bold ">{time}</span>
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
