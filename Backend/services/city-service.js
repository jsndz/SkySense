const CityRepository = require("../repositories/city-repository");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async getAllCity() {
    try {
      const city = await this.cityRepository.getAll();
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getByCityId(id) {
    try {
      const city = await this.cityRepository.getById(id);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async createCity(city) {
    try {
      const city = await this.cityRepository.create(city);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async updateCity(id, city) {
    try {
      const city = await this.cityRepository.update(id, city);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async deleteCity(id) {
    try {
        const city = await this.cityRepository.destroy(id);
        return city;
      } catch (error) {
        console.log("Something went wrong in the service layer");
        throw { error };
      }
  }
}


module.exports = CityService;