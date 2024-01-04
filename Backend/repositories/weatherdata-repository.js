const { WeatherData } = require("../models/index");
const CrudRepository = require("./crud-repository");
class WeatherDataRepository extends CrudRepository {
  constructor() {
    super(City);
  }
}

module.exports = WeatherDataRepository;
