import airlineService from "../services/airline.service.js";
export const getAirlines = async (req, res) => {
  try {
    const result = await airlineService.getAllAirlines();
    console.table(result.rows);
    if (result) {
      res.status(200).send(result.rows);
    } else {
      res.status(404).send("a error ocurred in getAirlanes");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};
