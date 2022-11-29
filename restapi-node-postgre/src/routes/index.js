import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('la conexion ha sido correcta')
})


import airlinesRoutes from './airlines.routes.js'
import airportsRoutes from './airports.routes.js'
import flightsRoutes from './flights.routes.js'



router.use('/airline', airlinesRoutes)
router.use('/airport', airportsRoutes)
router.use('/flight', flightsRoutes)





export default router;