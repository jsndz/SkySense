const CityRepository = require("../repositories/city-repository");
const WeatherDataRepository = require("../repositories/weatherdata-repository");
const genCityData = require("../middlewares/city-api");
const genWeatherData = require("../middlewares/weather-api");

class WeatherService {
  constructor() {
    this.cityRepository = new CityRepository();
    this.weatherRepository = new WeatherDataRepository();
  }

  async getWeather(cityname) {
    try {
      const cityData = await genCityData(cityname);

      const city = await this.cityRepository.create({
        name: cityData.city,
        latitude: cityData.lat,
        longitude: cityData.lon,
      });
      const weather = await genWeatherData(city.latitude,city.longitude);
      const weatherdata = await this.weatherRepository.create({
        temperature: weather.temperature,
        humidity:weather.humidity,
        timestamp:weather.timestamp
      });

      return weatherdata;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}


module.exports = WeatherService;