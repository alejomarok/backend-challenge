import { request, response } from 'express'
import Airport from '../models/airports.models.js'
import { airports } from '../data/airports-data.js'



import { readFile } from 'fs/promises';

const dataAirports = JSON.parse(
    await readFile(
      new URL("../data/airports.json", import.meta.url)
    )
  );




export const getAirports = async (req = request, res = response) => {
	try {        

		res.json(dataAirports);

	} catch (error) {
		console.log('failed')
		res.status(500).json({ msg: error })
	}
}

export const getByIdAirport = async (req = request, res = response) => {
	const { id } = req.params
    if (id) {
        _.each(dataAirports, (airport, i) => {
            if (airport.id === id) {
            }
        });
        res.json(dataAirports);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
}

export const postAirport = async (req = request, res = response) => {
    const id = dataAirports.length + 1;
    const { IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE,LONGITUDE } = req.body;
    const newdataAirports = { ...req.body, id };
    if (id && IATA_CODE && AIRPORT && CITY && STATE && COUNTRY && LATITUDE && LONGITUDE) {
        dataAirports.push(newdataAirports);
        res.json(dataAirports);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
};






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

export const putAirport = async (req = request, res = response) =>  {
    const { id } = req.params;
    const { IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE,LONGITUDE } = req.body;
    if (id && IATA_CODE && AIRPORT && CITY && STATE && COUNTRY && LATITUDE && LONGITUDE) {
        _.each(dataAirports, (airport, i) => {
            if (airport.id === id) {
                airport.IATA_CODE = IATA_CODE;
                airport.AIRPORT = AIRPORT;
                airport.CITY = CITY;
                airport.STATE = STATE;
                airport.COUNTRY = COUNTRY;
                airport.LATITUDE = LATITUDE;
                airport.LONGITUDE = LONGITUDE;
            }
        });
        res.json(dataAirports);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
};

export const deleteAirport = async (req = request, res = response) => {
    const {id} = req.params;
    if (id) {
        _.each(dataAirports, (airport, i) => {
            if (airport.id == id) {
                airport.splice(i, 1);
            }
        });
        res.json(dataAirports);
    }
}

