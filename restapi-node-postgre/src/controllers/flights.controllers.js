import { request, response } from 'express'
import Flight from '../models/flights.models.js'
import { flights } from '../data/flights-data.js'


import dataFlights from "../data/flights.json" assert { type: "json" };


//metodo get para obtener la data
export const getFlights = async (req = request, res = response) => {
	try {
		res.json(dataFlights);

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
	const id = dataFlights.length + 1;
	const { YEAR, MONTH, DAY, DAY_OF_WEEK, AIRLINE, FLIGHT_NUMBER, TAIL_NUMBER, ORIGIN_AIRPORT, DESTINATION_AIRPORT, SCHEDULED_DEPARTURE, DEPARTURE_TIME, DEPARTURE_DELAY, TAXI_OUT, WHEELS_OFF, SCHEDULED_TIME, ELAPSED_TIME, AIR_TIME, DISTANCE, WHEELS_ON, TAXI_IN, SCHEDULED_ARRIVAL, ARRIVAL_TIME, ARRIVAL_DELAY, DIVERTED, CANCELLED, CANCELLATION_REASON, AIR_SYSTEM_DELAY, SECURITY_DELAY, AIRLINE_DELAY, LATE_AIRCRAFT_DELAY, WEATHER_DELAY } = req.body;
	const newdataFlights = { ...req.body, id };
	if (id && YEAR && MONTH && DAY && DAY_OF_WEEK && AIRLINE && FLIGHT_NUMBER && TAIL_NUMBER && ORIGIN_AIRPORT && DESTINATION_AIRPORT && SCHEDULED_DEPARTURE && DEPARTURE_TIME && DEPARTURE_DELAY && TAXI_OUT && WHEELS_OFF && SCHEDULED_TIME && ELAPSED_TIME && AIR_TIME && DISTANCE && WHEELS_ON && TAXI_IN && SCHEDULED_ARRIVAL && ARRIVAL_TIME && ARRIVAL_DELAY && DIVERTED && CANCELLED && CANCELLATION_REASON && AIR_SYSTEM_DELAY && SECURITY_DELAY && AIRLINE_DELAY && LATE_AIRCRAFT_DELAY && WEATHER_DELAY) {
		dataFlights.push(newdataFlights);
		res.json(dataFlights);
	} else {
		res.status(500).json({ error: 'There was an error.' });
	}
};

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
	const { id } = req.params;
	const { YEAR, MONTH, DAY, DAY_OF_WEEK, AIRLINE, FLIGHT_NUMBER, TAIL_NUMBER, ORIGIN_AIRPORT, DESTINATION_AIRPORT, SCHEDULED_DEPARTURE, DEPARTURE_TIME, DEPARTURE_DELAY, TAXI_OUT, WHEELS_OFF, SCHEDULED_TIME, ELAPSED_TIME, AIR_TIME, DISTANCE, WHEELS_ON, TAXI_IN, SCHEDULED_ARRIVAL, ARRIVAL_TIME, ARRIVAL_DELAY, DIVERTED, CANCELLED, CANCELLATION_REASON, AIR_SYSTEM_DELAY, SECURITY_DELAY, AIRLINE_DELAY, LATE_AIRCRAFT_DELAY, WEATHER_DELAY } = req.body;
	if (id && YEAR && MONTH && DAY && DAY_OF_WEEK && AIRLINE && FLIGHT_NUMBER && TAIL_NUMBER && ORIGIN_AIRPORT && DESTINATION_AIRPORT && SCHEDULED_DEPARTURE &&
		 DEPARTURE_TIME && DEPARTURE_DELAY && TAXI_OUT && WHEELS_OFF && SCHEDULED_TIME && ELAPSED_TIME &&
		 AIR_TIME && DISTANCE && WHEELS_ON && TAXI_IN && SCHEDULED_ARRIVAL && ARRIVAL_TIME && ARRIVAL_DELAY && 
		 DIVERTED && CANCELLED && CANCELLATION_REASON && AIR_SYSTEM_DELAY && SECURITY_DELAY && 
		 AIRLINE_DELAY && LATE_AIRCRAFT_DELAY && WEATHER_DELAY) {
		_.each(dataFlights, (flight, i) => {
			if (flight.id === id) {
				flight.YEAR = YEAR;
				flight.MONTH = MONTH;
				flight.DAY = DAY;
				flight.DAY_OF_WEEK = DAY_OF_WEEK;
				flight.AIRLINE = AIRLINE;
				flight.FLIGHT_NUMBER = FLIGHT_NUMBER;
				flight.TAIL_NUMBER = TAIL_NUMBER;
				flight.ORIGIN_AIRPORT = ORIGIN_AIRPORT;
				flight.DESTINATION_AIRPORT = DESTINATION_AIRPORT;
				flight.SCHEDULED_DEPARTURE = SCHEDULED_DEPARTURE;
				flight.DEPARTURE_TIME = DEPARTURE_TIME;
				flight.DEPARTURE_DELAY = DEPARTURE_DELAY;
				flight.TAXI_OUT = TAXI_OUT;
				flight.WHEELS_OFF = WHEELS_OFF;
				flight.SCHEDULED_TIME = SCHEDULED_TIME;
				flight.ELAPSED_TIME = ELAPSED_TIME;
				flight.AIR_TIME = AIR_TIME;
				flight.DISTANCE = DISTANCE;
				flight.WHEELS_ON = WHEELS_ON;
				flight.TAXI_IN = TAXI_IN;
				flight.SCHEDULED_ARRIVAL = SCHEDULED_ARRIVAL;
				flight.ARRIVAL_TIME = ARRIVAL_TIME;
				flight.ARRIVAL_DELAY = ARRIVAL_DELAY;
				flight.DIVERTED = DIVERTED;
				flight.CANCELLED = CANCELLED;
				flight.CANCELLATION_REASON = CANCELLATION_REASON;
				flight.AIR_SYSTEM_DELAY = AIR_SYSTEM_DELAY;
				flight.SECURITY_DELAY = SECURITY_DELAY;
				flight.ARRIVAL_DELAY = ARRIVAL_DELAY;
				flight.AIRLINE_DELAY = AIRLINE_DELAY;
				flight.LATE_AIRCRAFT_DELAY = LATE_AIRCRAFT_DELAY;
				flight.WEATHER_DELAY = WEATHER_DELAY;

			}
		});
		res.json(dataFlights);
	} else {
		res.status(500).json({ error: 'There was an error.' });
	}
};

export const deleteFlight = async (req = request, res = response) => {
    const {id} = req.params;
    if (id) {
        _.each(dataFlights, (flight, i) => {
            if (flight.id == id) {
                flight.splice(i, 1);
            }
        });
        res.json(dataFlights);
    }
}


