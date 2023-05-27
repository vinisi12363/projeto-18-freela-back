import {getAllFlights,} from "../controllers/tickets.controllers.js";
import express from "express";

const router = express.Router();

router.get("/tickets", getAllFlights);

export default router;
