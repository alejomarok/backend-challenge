import { request, response } from 'express'

import  Airline  from '../models/airlines.models.js'
import { airlines } from '../data/airlines-data.js'

import { readFile } from 'fs/promises';

const dataAirlines = JSON.parse(
    await readFile(
      new URL("../data/airlines.json", import.meta.url)
    )
  );



 export const getAirlines = async (req = request, res = response) => {
	try {        

		res.json(dataAirlines);

	} catch (error) {
		console.log('failed')
		res.status(500).json({ msg: error })
	}
}

export const getByIdAirline = async (req = request, res = response) => {
	const { id } = req.params
    if (id) {
        _.each(dataAirlines, (airline, i) => {
            if (airline.id === id) {
            }
        });
        res.json(dataAirlines);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
}

export const postAirline = async (req = request, res = response) => {
    const id = dataAirlines.length + 1;
    const { IATA_CODE, AIRLINE } = req.body;
    const newdataAirlines = { ...req.body, id };
    if (id && IATA_CODE && AIRLINE) {
        dataAirlines.push(newdataAirlines);
        res.json(dataAirlines);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
};






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

export const putAirline = async (req = request, res = response) =>  {
    const { id } = req.params;
    const { IATA_CODE, AIRLINE } = req.body;
    if (id && IATA_CODE && AIRLINE) {
        _.each(dataAirlines, (airline, i) => {
            if (airline.id === id) {
                airline.IATA_CODE = IATA_CODE;
                airline.AIRLINE = AIRLINE;

            }
        });
        res.json(dataAirlines);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
};

export const deleteAirline = async (req = request, res = response) => {
    const {id} = req.params;
    if (id) {
        _.each(dataAirlines, (airline, i) => {
            if (airline.id == id) {
                airline.splice(i, 1);
            }
        });
        res.json(dataAirlines);
    }
}

