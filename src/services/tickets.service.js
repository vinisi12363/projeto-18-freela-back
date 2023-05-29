import {db} from '../config/connectdatabase.config.js'

export const getAllFlights = async() => {
  try {
    const result = await db.query(
      `SELECT 
          f.flight_id,
          a.airline_name,
          dc.city_name AS departure_city_name,
          dd.city_name AS destination_city_name,
          dd.city_id AS destination_city_id,
          f.departure_time,
          f.arrival_time,
          f.price
        FROM flights f
        JOIN airlines a ON f.airline_id = a.airline_id
        JOIN cities dc ON f.departure_city_id = dc.city_id
        JOIN cities dd ON f.destination_city_id = dd.city_id
        WHERE 1=1 AND f.airline_id = $1 AND f.departure_city_id = $2
            AND f.price >= $3 AND f.price <= $4
        ORDER BY f.departure_time
        LIMIT $5;
      `,
      [1, 3, 1000, 1500, 30]
    );
    return result;
  } catch (err) {
    return err.message;
  }
}
export const searchFlight = async(body)=>{
  const {airline_id, destination_city_id, prices} = body

  
  try {
    const result = await db.query(
      `SELECT 
          f.flight_id,
          a.airline_name,
          dc.city_name AS departure_city_name,
          dd.city_name AS destination_city_name,
          f.departure_time,
          f.arrival_time,
          f.price
            FROM flights f
            JOIN airlines a ON f.airline_id = a.airline_id
            JOIN cities dc ON f.departure_city_id = dc.city_id
            JOIN cities dd ON f.destination_city_id = dd.city_id
            WHERE 1=1 AND f.airline_id = $1 AND f.departure_city_id = $2
                AND f.price >= $3 AND f.price <= $4
            ORDER BY f.departure_time
            LIMIT $5;
      `,
      [airline_id, destination_city_id, prices[0], prices[1 ], 30]
    );
    return result;
  } catch (err) {
    return err.message;
  }

}


export default { getAllFlights, searchFlight };