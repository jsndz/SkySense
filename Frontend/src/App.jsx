import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import LoadingPage from "./components/LoadingPage";
import { getWeatherD } from "./backend";
import Footer from "./components/Footer";
import w1 from "./assets/Weather.jpg";
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
  const [wind, setWind] = useState("");
  const [visibility, setVisibility] = useState("");
  const [src, setSrc] = useState("");
  useEffect(() => {
    setSrc(w1);
  }, []);
  const getWeatherData = async (city) => {
    try {
      setLoading(true);
      // const response = await fetch(
      //   `http://localhost:3000/api/v1/getweatherD/${city}`
      // );
      const weatherData = await getWeatherD(city);

      console.log(weatherData);
      setTemp(weatherData.temperature);
      setPlace(weatherData.name);
      setTime(weatherData.time);
      setAddress(weatherData.address);
      setHumidity(weatherData.humidity);
      setCondition(weatherData.condition.text);
      setConditionIcon(weatherData.condition.icon);
      setDay(weatherData.isDay);
      setWind(weatherData.wind_kph);
      setVisibility(weatherData.vis_km);
    } catch (err) {
      console.log("Invalid City Name", err);
    } finally {
      setLoading(false);
    }
  };
  const appStyles = {
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  return (
    <div className="flex flex-col min-h-screen " style={appStyles}>
      <Navbar setSrc={setSrc} src={src} />
      <div className="flex-grow">
        {loading ? (
          <div className="flex items-center justify-center h-full pt-64">
            <LoadingPage />
          </div>
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
            wind={wind}
            visibility={visibility}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
