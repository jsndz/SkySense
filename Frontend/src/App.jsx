import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import LoadingPage from "./components/LoadingPage";
function App() {
  const [loading, setLoading] = useState(false);
  const [day, setDay] = useState("");
  const [temp, setTemp] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [address, setAddress] = useState("");
  const [humidity, setHumidity] = useState("");
  const [condition, setCondition] = useState("");
  const [conditionIcon, setConditionIcon] = useState("");

  const getWeatherData = async (city) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/v1/getweatherD/${city}`
      );
      // console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const weatherData = await response.json();
      console.log(weatherData);
      setTemp(weatherData.data.temperature);
      setPlace(weatherData.data.name);
      setTime(weatherData.data.time);
      setAddress(weatherData.data.address);
      setHumidity(weatherData.data.humidity);
      setCondition(weatherData.data.condition.text);
      setConditionIcon(weatherData.data.condition.icon);
      setDay(weatherData.data.isDay);
    } catch (err) {
      console.log("Invalid City Name", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar></Navbar>

      {loading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <Weather
          getWeatherData={getWeatherData}
          temp={temp}
          place={place}
          address={address}
          humidity={humidity}
          condition={condition}
          day={day}
          time={time}
          conditionIcon={conditionIcon}
        ></Weather>
      )}
    </>
  );
}

export default App;
