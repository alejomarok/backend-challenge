import { request, response } from 'express'
import Airport from '../models/airports.models.js'
import { airports } from '../data/airports-data.js'




export const getAirports = async (req = request, res = response) => {
	try {
		const airports = await Airport.findAll()
		res.status(200).json({ airports })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const getByIdAirport = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const airport = await Airport.findByPk(id)
		res.status(200).json({ airport })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const postAirport = async (req = request, res = response) => {
	const { IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE, LONGITUDE } = req.body
	try {
		const airport = await Airport.findOne({ where: { AIRPORT } })
		if (airport) {
			return res.status(401).json({ msg: 'This Airport is already registered' })
		}

		const newAirPort = await Airport.create({ IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE, LONGITUDE })

		res.status(201).json({
			msg: 'New Airport created',
			newAirPort,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const addDataInDb = (req = request, res = response) => {
	try {
		airports.forEach(async (airport) => {
			await Airport.create(airport)
		})
		res.status(201).json({ msg: 'Aggregated initial airports in database' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const putAirport = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const airport = await Airport.findByPk(id)
		await airport.update(req.body)

		res.status(200).json({
			msg: 'Airport successfully upgraded',
			airport,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const deleteAirport = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const airport = await Airport.findByPk(id)
		await airport.destroy()

		res.status(200).json({ msg: 'Airport successfully eliminated' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}
