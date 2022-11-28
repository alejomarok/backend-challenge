const { Router } = require('express');
const router = Router()


import airlinesRoutes from './airlines.routes.js'
import airportsRoutes from './airports.routes.js'
import flightsRoutes from './flights.routes.js'



router.use('/airline', airlinesRoutes)
router.use('/airport', airportsRoutes)
router.use('/flight', flightsRoutes)




module.exports = router;