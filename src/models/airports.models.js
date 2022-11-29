import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Airports = sequelize.define('airports', {
    IATA_CODE: {
		type: DataTypes.TEXT,
	},
    AIRPORT: {
		type: DataTypes.TEXT,
	},
    CITY: {
		type: DataTypes.TEXT,
	},
    STATE: {
		type: DataTypes.TEXT,
	},
    COUNTRY: {
		type: DataTypes.TEXT,
	},
    LATITUDE: {
		type: DataTypes.FLOAT,
	},
    LONGITUDE: {
		type: DataTypes.FLOAT,
	},
})

export default Airports; 