import {db} from '../config/connectdatabase.config.js'


export async function getAllCities() {

    try {
        const result = await db.query(`select * from cities;`)

        return result

    }catch(err){
        return err.message
    }

}

export default {getAllCities}