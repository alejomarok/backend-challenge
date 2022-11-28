import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Flight = sequelize.define('flights', {
    YEAR: {
		type: DataTypes.INTEGER,
	},
	MONTH: {
		type: DataTypes.INTEGER,
	},
	DAY: {
		type: DataTypes.INTEGER,
	},
	DAY_OF_WEEK: {
		type: DataTypes.INTEGER,
	},
	AIRLINE: {
		type: DataTypes.TEXT,
	},
	FLIGHT_NUMBER: {
		type: DataTypes.INTEGER,
	},
	TAIL_NUMBER: {
		type: DataTypes.TEXT,
	},
	ORIGIN_AIRPORT: {
		type: DataTypes.TEXT,
	},
	DESTINATION_AIRPORT: {
		type: DataTypes.TEXT,
	},
	SCHEDULED_DEPARTURE: {
		type: DataTypes.INTEGER,
	},
	DEPARTURE_TIME: {
		type: DataTypes.INTEGER,
	},
	DEPARTURE_DELAY: {
		type: DataTypes.INTEGER,
	},
	TAXI_OUT: {
		type: DataTypes.INTEGER,
	},
	WHEELS_OFF: {
		type: DataTypes.INTEGER,
	},
	SCHEDULED_TIME: {
		type: DataTypes.INTEGER,
	},
	ELAPSED_TIME: {
		type: DataTypes.INTEGER,
	},
	AIR_TIME: {
		type: DataTypes.INTEGER,
	},
	DISTANCE: {
		type: DataTypes.INTEGER,
	},
	WHEELS_ON: {
		type: DataTypes.INTEGER,
	},
	TAXI_IN: {
		type: DataTypes.INTEGER,
	},
	SCHEDULED_ARRIVAL: {
		type: DataTypes.INTEGER,
	},
	ARRIVAL_TIME: {
		type: DataTypes.INTEGER,
	},
	ARRIVAL_DELAY: {
		type: DataTypes.INTEGER,
	},
	DIVERTED: {
		type: DataTypes.INTEGER,
	},
	CANCELLED: {
		type: DataTypes.INTEGER,
	},
	CANCELLATION_REASON: {
		type: DataTypes.TEXT,
	},
	AIR_SYSTEM_DELAY: {
		type: DataTypes.TEXT,
	},
	SECURITY_DELAY: {
		type: DataTypes.TEXT,
	},
	AIRLINE_DELAY: {
		type: DataTypes.TEXT,
	},
	LATE_AIRCRAFT_DELAY: {
		type: DataTypes.TEXT,
	},
	WEATHER_DELAY: {
		type: DataTypes.TEXT,
	},
})