import express from 'express'
import homeController from '../controllers/home.controllers.js'


const router = express.Router()

router.get ('/home', homeController.getCities)


export default router

