const WeatherService = require("../services/getweather-service");

const weatherService = new WeatherService();

const getWeather = async (req, res) => {
  try {
    const weather = await weatherService.getWeather(req.params.cityname);
    return res.status(201).json({
      data: weather,
      sucess: true,
      message: "successfully fetched weather data",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "couldnt fetch weather data",
      err: { error },
    });
  }
};

module.exports = { getWeather };
