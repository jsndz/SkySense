const { WeatherData } = require("../models/index");
const CrudRepository = require("./crud-repository");
class WeatherDataRepository extends CrudRepository {
  constructor() {
    super(WeatherData);
  }
}

module.exports = WeatherDataRepository;
