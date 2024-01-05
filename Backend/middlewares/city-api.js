const axios = require("axios");

async function genCityData(cityname) {
  const apiUrl = "https://nominatim.openstreetmap.org/search";
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: cityname,
        format: "json",
      },
    });
    if (response.data.length === 0) {
      throw new Error("City not found");
      return null;
    } else {
      const location = response.data[0];
      console.log("location", location);
      return {
        lat: location.lat,
        lon: location.lon,
        city: location.display_name,
      };
    }
  } catch (error) {
    console.error("Error fetching city coordinates:", error.message);
    throw error;
  }
}
