import { Router } from "express"
import home from './home.routes.js'
import airlines from './airlines.routes.js'
import tickets from './tickets.routes.js'

const router= Router()

router.use(home)
router.use(airlines)
router.use(tickets)


export default router