import { getAllFlights, searchFlights} from "../controllers/tickets.controllers.js";
import express from "express";

const router = express.Router();

router.get("/tickets", getAllFlights);
router.post("/tickets", searchFlights);

export default router;
