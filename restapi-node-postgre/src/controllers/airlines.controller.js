import { request, response } from 'express'
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