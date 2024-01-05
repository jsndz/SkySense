const WeatherDataRepository = require("../repositories/weatherdata-repository");


class WeatherDataService {
    constructor() {
        this.weatherDataRepository = new WeatherDataRepository();
    }
    
    async getAll() {
        try {
        const weatherData = await this.weatherDataRepository.getAll();
        return weatherData;
        } catch (error) {
        console.log("Something went wrong in the service layer");
        throw { error };
        }
    }
    
    async getById(id) {
        try {
        const weatherData = await this.weatherDataRepository.getById(id);
        return weatherData;
        } catch (error) {
        console.log("Something went wrong in the service layer");
        throw { error };
        }
    }
    
    async create(weatherData) {
        try {
        const weatherData = await this.weatherDataRepository.create(weatherData);
        return weatherData;
        } catch (error) {
        console.log("Something went wrong in the service layer");
        throw { error };
        }
    }
    
    async update(id, weatherData) {
        try {
        const weatherData = await this.weatherDataRepository.update(id, weatherData);
        return weatherData;
        } catch (error) {
        console.log("Something went wrong in the service layer");
        throw { error };
        }
    }
    
    async delete(id) {
        try {
            const weatherData = await this.weatherDataRepository.destroy(id);
            return weatherData;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
    }