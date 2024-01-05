const express = require("express");
const {
  CreateWeatherData,
  DeleteWeatherData,
  UpdateWeatherData,
  GetWeatherData,
  GetAllWeatherData,
} = require("../../controllers/weatherdata-controller");
const {
  CreateCity,
  DeleteCity,
  UpdateCity,
  GetCity,
  GetAllCity,
} = require("../../controllers/city-controller");
const {getWeather } = require("../../controllers/getweather-controller");
const router = express.Router();

router.post("/weatherdata", CreateWeatherData);
router.delete("/weatherdata/:id", DeleteWeatherData);
router.put("/weatherdata/:id", UpdateWeatherData);
router.get("/weatherdata/:id", GetWeatherData);
router.get("/weatherdata", GetAllWeatherData);

router.get("/getweather/:cityname", getWeather);

router.post("/city", CreateCity);
router.delete("/city/:id", DeleteCity);
router.put("/city/:id", UpdateCity);
router.get("/city/:id", GetCity);
router.get("/city", GetAllCity);

module.exports = router;
