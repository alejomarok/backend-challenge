import { request, response } from 'express'

import Airline from '../models/airlines.models.js'
import Airport from '../models/airports.models.js'
import Flight from '../models/flights.models.js'

export const checkAirlineId = async (req = request, res = response, next) => {
	const { id } = req.params
	try {
		const airline = await Airline.findByPk(id)
		console.log(airline)
		if (!airline) {
			return res.status(400).json({ msg: `The airline with the id ${id} does not exist` })
        }
        
        next()
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}
export const checkAirportId = async (req = request, res = response, next) => {
	const { id } = req.params
	try {
		const airport = await Airport.findByPk(id)
		if (!airport) {
			return res.status(400).json({ msg: `The airport with the id ${id} does not exist1` })
		}
        
        next()
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}
export const checkFlightId = async (req = request, res = response, next) => {
	const { id } = req.params
	try {
		const airport = await Flight.findByPk(id)
		if (!airport) {
			return res.status(400).json({ msg: `The flight with the id ${id} does not exist1` })
		}        
        next()
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}