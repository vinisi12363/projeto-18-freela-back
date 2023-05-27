import { Router } from "express"
import home from './home.routes.js'
import airlines from './airlines.routes.js'

const router= Router()

router.use(home)
router.use(airlines)
//router.use(hotels)


export default router