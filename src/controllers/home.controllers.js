import homeService from '../services/home.service.js'

export const getCities = async (req, res) =>{
    try {
        const result = await homeService.getAllCities()
        if(result){
            console.table (result.rows)
        res.status(200).send(result.rows)
        }else{
            res.status(400).send('error in get cities')
        }
        
    }catch(err){
        const error = "erro no getHomes"+ err.message
        res.status(500).send(error)
    }

}

export default {getCities}