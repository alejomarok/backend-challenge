const { Router } = require('express');



import { 
    addDataInDb, 
    deleteFlight, 
    getByIdFlight, 
    getFlights, 
    postFlight, 
    putFlight } from '../controllers/flights.controller.js'

import { Router } from 'express'
import { checkFlightId } from '../middlewares/middlewareId.js'

const flightsRoutes = Router()

flightsRoutes.get('/', getFlights)
flightsRoutes.get('/:id',checkFlightId, getByIdFlight)
flightsRoutes.post('/', postFlight)
flightsRoutes.post('/add', addDataInDb)
flightsRoutes.put('/:id', checkFlightId, putFlight)
flightsRoutes.delete('/:id', checkFlightId, deleteFlight)

export default flightsRoutes
