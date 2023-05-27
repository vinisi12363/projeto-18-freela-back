import getAirlines from '../controllers/tickets.controllers.js'
import express from 'express'

const router = express.Router();

router.get("/airlines", getAirlines)


export default router
