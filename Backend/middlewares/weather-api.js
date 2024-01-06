const axios = require('axios');
const {WAPI} = require('../config/serverconfig');

async function genWeatherData(lat, lon) {
  const apiUrl = 'http://api.weatherapi.com/v1/current.json';
  try {
    const response = await axios.get(apiUrl, {
      params: {
        key: WAPI,
        q: `${lat},${lon}`,
      },
    });
    const { temp_c: temperature, humidity } = response.data.current;
    const timestamp= new Date();
    return { temperature, humidity, timestamp };
    
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw error;
  }
}

module.exports = genWeatherData;