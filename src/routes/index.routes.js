import { Router } from "express"
import home from './home.routes.js'
import airlines from './airlines.routes.js'
import tickets from './tickets.routes.js'
import hotels from './hotels.routes.js'

const router= Router()

router.use(home)
router.use(airlines)
router.use(tickets)
router.use(hotels)


export default router