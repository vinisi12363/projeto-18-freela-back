import ticketsService from '../services/tickets.service.js'


 export const getAllFlights = async(req, res)=>{
    try{
        const result = await ticketsService.getAllFlights()
        console.table(result.rows)
        if (result){
            res.status(200).send(result.rows)
        }else {
            res.status(404).send("a error ocurred in getTickets")
        }


    }catch (err){
        res.status(500).send (err.message)
    }

}
 export const searchFlights = async(req, res)=>{
   
    try {
        const result = await ticketsService.searchFlight(req.body);
        console.table(result.rows);
        if (result) {
        res.status(200).send(result.rows);
        } else {
        res.status(404).send("a error ocurred in searchFlights");
        }
    } catch (err) {
        res.status(500).send(err.message);
    }


}
