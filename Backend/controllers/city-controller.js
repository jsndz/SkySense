const CityService = require("../services/city-service");

const cityService = new CityService();

const CreateCity = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            sucess: true,
            message: 'successfully created a City',
            err:{}
        })
    } catch (error) {
        console.log(error); 
       return res.status(500).json({
            data: {},
            sucess: false,
            message: 'couldnt create a city',
            err:{error}
       })
    }
}; 
const DeleteCity = async (req, res) => {
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data: city,
            sucess: true,
            message: 'successfully created a City',
            err:{}
        })
    } catch (error) {
        console.log(error); 
       return res.status(500).json({
            data: {},
            sucess: false,
            message: 'couldnt create a city',
            err:{error}
       })
    }
}; 

const UpdateCity = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data: city,
            sucess: true,
            message: 'successfully created a City',
            err:{}
        })
    } catch (error) {
        console.log(error); 
       return res.status(500).json({
            data: {},
            sucess: false,
            message: 'couldnt create a city',
            err:{error}
       })
    }
}; 

const GetCity = async (req, res) => {   
    try {
        const city = await cityService.getByCityId(req.body);
        return res.status(201).json({
            data: city,
            sucess: true,
            message: 'successfully created a City',
            err:{}
        })
    } catch (error) {
        console.log(error); 
       return res.status(500).json({
            data: {},
            sucess: false,
            message: 'couldnt create a city',
            err:{error}
       })
    }
}

const GetAllCity = async (req, res) => {
    try {
        const city = await cityService.getAllCity();
        return res.status(201).json({
            data: city,
            sucess: true,
            message: 'successfully returned all Cities',
            err:{}
        })
    } catch (error) {
        console.log(error); 
       return res.status(500).json({
            data: {},
            sucess: false,
            message: 'couldnt return a cities',
            err:{error}
       })
    }
};




module.exports = {
    CreateCity,
    DeleteCity,
    UpdateCity,
    GetCity,
    GetAllCity
}