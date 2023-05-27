import {db} from '../config/connectdatabase.config.js'

export  async function  getAllFlights() {
  try {
    const result = await db.query(
      `SELECT 
            f.flight_id,
            f.departure_time,
            f.arrival_time,
            f.price,
            a.airline_name,
            dc.city_name AS departure.city_name,
            dd.city_name AS destination.city_name,
            FROM flights f
            JOIN airlines a ON f.airline_id = a.airline_id
            JOIN cities dc ON f.departure_city_id=dc.city_id
            JOIN cities dd ON f.destination_city_id = dd.city_id
            WHERE 1=1 AND f.airline_id = $1 AND f.departure_city_id = $2
            AND f.price >= $3  AND <= $4
            ORDER BY f.departure_time LIMIT $5`,
      1,
      5,
      1000,
      1500,
      30
    );
        console.table("RESULT", result)
    return result;
  } catch (err) {
    return err.message;
  }
}

export default {getAllFlights}