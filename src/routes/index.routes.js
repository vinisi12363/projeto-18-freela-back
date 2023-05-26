import { Router } from "express"
import home from './home.routes.js'

const router= Router()

router.use(home)
//router.use(tickets)
//router.use(hotels)


export default router