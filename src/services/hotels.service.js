import {db} from '../config/connectdatabase.config.js'

 export const getAllHotels= async(city_id)=>{
    try{
        const result = db.query(`SELECT 
                                h.hotel_name,
                                h.description,
                                h.amenities, 
                                h.price_per_night,
                                dd.city_name AS destination_city_name
                                from hotels h
                                JOIN cities dd ON h.city_id = dd.city_id
                                where 1=1 AND h.city_id = $1;`,
                                [city_id]);

        return result

    }catch(err){ return err.message}


 }

 export default {getAllHotels}