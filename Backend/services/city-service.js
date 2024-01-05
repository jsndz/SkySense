const CityRepository = require("../repositories/city-repository");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async getAll() {
    try {
      const city = await this.cityRepository.getAll();
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getById(id) {
    try {
      const city = await this.cityRepository.getById(id);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async create(city) {
    try {
      const city = await this.cityRepository.create(city);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async update(id, city) {
    try {
      const city = await this.cityRepository.update(id, city);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async delete(id) {
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