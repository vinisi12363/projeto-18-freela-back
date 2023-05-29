import { getAvaliableHotels } from "../controllers/hotels.controllers.js";
import express from "express";

const router = express.Router();

router.post("/hotels", getAvaliableHotels);

export default router;
