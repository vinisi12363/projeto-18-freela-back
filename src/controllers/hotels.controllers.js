import hotelsServices from "../services/hotels.service.js";

export const getAvaliableHotels = async (req, res) => {
    const {city_id} = req.body;
 
    try {
    const result = await hotelsServices.getAllHotels(city_id);
    console.table(result.rows);
    if (result) {
      res.status(200).send(result.rows);
    } else {
      res.status(404).send("a error ocurred in getHotels");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};


export default {getAvaliableHotels}