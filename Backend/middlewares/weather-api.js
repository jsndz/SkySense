const axios = require("axios");
const { WAPI } = require("../config/serverconfig");

async function genWeatherData(lat, lon) {
  const apiUrl = "http://api.weatherapi.com/v1/current.json";
  try {
    const response = await axios.get(apiUrl, {
      params: {
        key: WAPI,
        q: `${lat},${lon}`,
      },
    });
    console.log(response);
    const {
      temp_c: temperature,
      humidity,
      is_day,
      condition,
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
    };
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw error;
  }
}

module.exports = genWeatherData;
