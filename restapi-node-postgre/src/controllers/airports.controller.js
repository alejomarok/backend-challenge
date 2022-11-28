import { request, response } from 'express'
import Airport from '../models/airports.models.js'
import { Airports } from '../data/airports-data'




//metodo get para obtener la data
export const getAirports = async (req = request, res = response) => {
	try {
		const Airports = await Airport.findAll()
		res.status(200).json({ Airports })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}


//get por id
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


//postAirport

export const postAirport = async (req = request, res = response) => {
	const { IATA_CODE, AIrport } = req.body
	try {
		const airport = await Airport.findOne({ where: { AIrport } })
		if (airport) {
			return res.status(400).json({ msg: 'This airport is already registered' })
		}
		const newAirport = await Airport.create({ IATA_CODE, AIrport })
		res.status(200).json({
			msg: 'New airport created',
			newAirport,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}


//poblar base de datos
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


//actualizar

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



//Borrar 

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