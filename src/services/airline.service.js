import {db} from '../config/connectdatabase.config.js'


export async function getAllAirlines() {

    try {
        const result = await db.query(`select * from airlines;`)

        return result

    }catch(err){
        return err.message
    }

}

export default {getAllAirlines}