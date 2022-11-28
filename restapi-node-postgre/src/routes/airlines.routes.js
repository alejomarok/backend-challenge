
const { Router } = require('express');


import {
	addDataInDb,
	deleteAirline,
	getAirlines,
	getByIdAirline,
	postAirline,
	putAirline,
} from '../controllers/airlines.controller.js'

import { Router } from 'express'
import { checkAirlineId } from '../middlewares/middlewareId.js'

const airlinesRoutes = Router()

airlinesRoutes.get('/', getAirlines)
airlinesRoutes.get('/:id', checkAirlineId, getByIdAirline)
airlinesRoutes.post('/', postAirline)
airlinesRoutes.post('/add', addDataInDb)
airlinesRoutes.put('/:id', checkAirlineId, putAirline)
airlinesRoutes.delete('/:id', checkAirlineId, deleteAirline)

export default airlinesRoutes
