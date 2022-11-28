import { request, response } from 'express'
import Airline from '../models/airlines.models.js'
import { airlines } from '../data/airlines-data.js'









//metodo get para obtener la data
export const getAirlines = async (req = request, res = response) => {
	try {
		const airlines = await Airline.findAll()
		res.status(200).json({ airlines })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}


//get por id
export const getByIdAirline = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const airline = await Airline.findByPk(id)

		res.status(200).json({ airline })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}


//postAirline

export const postAirline = async (req = request, res = response) => {
	const { IATA_CODE, AIRLINE } = req.body
	try {
		const airline = await Airline.findOne({ where: { AIRLINE } })
		if (airline) {
			return res.status(400).json({ msg: 'This airline is already registered' })
		}
		const newAirline = await Airline.create({ IATA_CODE, AIRLINE })
		res.status(200).json({
			msg: 'New airline created',
			newAirline,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

//poblar database
export const addDataInDb = async (req = request, res = response) => {
	try {
		airlines.forEach(async (airline) => {
			await Airline.create(airline)
		})
		res.status(201).json({ msg: 'Aggregated initial airlines in database' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

//actualizar

export const putAirline = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const airline = await Airline.findByPk(id)
		await airline.update(req.body)

		res.status(200).json({
			msg: 'Airline successfully upgraded',
			airline,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}



//Borrar 

export const deleteAirline = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const airline = await Airline.findByPk(id)

		await airline.destroy()
		res.status(200).json({ msg: 'Airline successfully eliminated' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}
