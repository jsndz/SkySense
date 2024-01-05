const axios = require('axios');
const {WAPI} = require('../config/serverconfig');

async function genWeatherData(lat, lon) {
  const apiUrl = 'http://api.weatherapi.com/v1';
  try {
    const response = await axios.get(apiUrl, {
      params: {
        key: WAPI,
        q: `${lat},${lon}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw error;
  }
}