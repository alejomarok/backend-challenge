import { request, response } from 'express'

import { flights } from '../data/flights-data.js'




//metodo get para obtener la data
export const getflights = async (req = request, res = response) => {
	try {
		const flights = await Flight.findAll()
		res.status(200).json({ flights })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}


//get por id
export const getByIdFlight = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const Flight = await Flight.findByPk(id)

		res.status(200).json({ Flight })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}


//postFlight

export const postFlight = async (req = request, res = response) => {
	const { IATA_CODE, Flight } = req.body
	try {
		const Flight = await Flight.findOne({ where: { Flight } })
		if (Flight) {
			return res.status(400).json({ msg: 'This Flight is already registered' })
		}
		const newFlight = await Flight.create({ IATA_CODE, Flight })
		res.status(200).json({
			msg: 'New Flight created',
			newFlight,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}


//actualizar

export const putFlight = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const Flight = await Flight.findByPk(id)
		await Flight.update(req.body)

		res.status(200).json({
			msg: 'Flight successfully upgraded',
			Flight,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}



//Borrar 

export const deleteFlight = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const Flight = await Flight.findByPk(id)

		await Flight.destroy()
		res.status(200).json({ msg: 'Flight successfully eliminated' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}