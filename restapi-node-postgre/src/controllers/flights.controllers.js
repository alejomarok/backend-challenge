import { request, response } from 'express'
import Flight from '../models/flights.models.js'
import { flights } from '../data/flights-data.js'




//metodo get para obtener la data
export const getFlights = async (req = request, res = response) => {
	try {
		const flights = await Flight.findAll()

		res.status(200).json({ flights })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}
//get by id
export const getByIdFlight = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const flight = await Flight.findByPk(id)

		res.status(200).json({ flights })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}
//post
export const postFlight = async (req = request, res = response) => {
	const { FLIGHT_NUMBER } = req.body
	try {
		const flight = await Flight.findOne({ where: { FLIGHT_NUMBER } })
		if (flight) {
			return res.status(401).json({ msg: 'This flight number is already registered' })
		}
		const newFlight = await Flight.create(req.body)
		res.status(201).json({
			msg: 'New flight created',
			newFlight,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

//poblar base de datos

export const addDataInDb = async (req = request, res = response) => {
	try {
		flights.forEach(async (flight) => {
			await Flight.create(flight)
		})
		res.status(201).json({ msg: 'Aggregated initial flights in database' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}


//actualizar
export const putFlight = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const flight = await Flight.findByPk(id)
		await flight.update(req.body)

		res.status(200).json({
			msg: 'Flight successfully upgraded',
			flight,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const deleteFlight = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const flight = await Flight.findByPk(id)
		await flight.destroy()

		res.status(200).json({ msg: 'Flight successfully eliminated' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

