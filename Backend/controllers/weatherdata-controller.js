const WeatherDataService = require("../services/weatherdata-service");

const weatherDataService = new WeatherDataService();

const CreateWeatherData = async (req, res) => {
  try {
    const weatherdata = await weatherDataService.createWeatherData(req.body);
    return res.status(201).json({
      data: weatherdata,
      sucess: true,
      message: "successfully created a WeatherData",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "couldnt create a WeatherData",
      err: { error },
    });
  }
};

const DeleteWeatherData = async (req, res) => {
  try {
    const weatherdata = await weatherDataService.deleteWeatherData(
      req.params.id
    );
    return res.status(201).json({
      data: weatherdata,
      sucess: true,
      message: "successfully created a WeatherData",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "couldnt create a WeatherData",
      err: { error },
    });
  }
};

const UpdateWeatherData = async (req, res) => {
  try {
    const weatherdata = await weatherDataService.updateWeatherData(
      req.params.id,
      req.body
    );
    return res.status(201).json({
      data: weatherdata,
      sucess: true,
      message: "successfully created a WeatherData",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "couldnt create a WeatherData",
      err: { error },
    });
  }
};

const GetWeatherData = async (req, res) => {
  try {
    const weatherdata = await weatherDataService.getWeatherData(req.params.id);
    return res.status(201).json({
      data: weatherdata,
      sucess: true,
      message: "successfully created a WeatherData",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "couldnt create a WeatherData",
      err: { error },
    });
  }
};

const GetAllWeatherData = async (req, res) => {
  try {
    const weatherdata = await weatherDataService.getAllWeatherData();
    return res.status(201).json({
      data: weatherdata,
      sucess: true,
      message: "successfully created a WeatherData",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "couldnt create a WeatherData",
      err: { error },
    });
  }
};

module.exports = {
  CreateWeatherData,
  DeleteWeatherData,
  UpdateWeatherData,
  GetWeatherData,
  GetAllWeatherData,
};
