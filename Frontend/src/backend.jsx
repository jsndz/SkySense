import axios from "axios";
const api_key = import.meta.env.VITE_WAPI;
async function genCityData(cityname) {
  const apiUrl = "https://nominatim.openstreetmap.org/search";
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: cityname,
        format: "json",
      },
    });
    if (response.data.length === 0) {
      throw new Error("City not found");
    } else {
      const location = response.data[0];
      console.log("location", location);
      return {
        lat: location.lat,
        lon: location.lon,
        name: location.name,
        address: location.display_name,
      };
    }
  } catch (error) {
    console.error("Error fetching city coordinates:", error.message);
    throw new Error("Error fetching city coordinates");
  }
}

async function sky(isDaytime) {
  if (isDaytime == 1) {
    return "Day";
  } else {
    return "Night";
  }
}

async function genWeatherData(lat, lon) {
  const apiUrl = "http://api.weatherapi.com/v1/current.json";
  try {
    const response = await axios.get(apiUrl, {
      params: {
        key: api_key,
        q: `${lat},${lon}`,
      },
    });

    const {
      temp_c: temperature,
      humidity,
      is_day,
      condition,
      wind_kph,
      vis_km,
    } = response.data.current;
    const { localtime: time } = response.data.location;
    const timestamp = new Date();
    return {
      temperature,
      humidity,
      condition,
      is_day,
      timestamp,
      time,
      wind_kph,
      vis_km,
    };
  } catch (error) {
    console.error("Error in fetching", error, error.response);
  }
}

export async function getWeatherD(cityname) {
  try {
    const city = await genCityData(cityname);
    const weatherdata = await genWeatherData(city.lat, city.lon);
    const skyTime = await sky(weatherdata.is_day);

    return {
      ...weatherdata,
      name: city.name,
      address: city.address,
      isDay: skyTime,
    };
  } catch (error) {
    console.log("Couldn't fetch data from API:", error.message);
    throw new Error("Error fetching data");
  }
}
