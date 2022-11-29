import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Airline = sequelize.define('airlines', {
    IATA_CODE: {
		type: DataTypes.TEXT,
	},
	AIRLINE: {
		type: DataTypes.TEXT,
	}, 
},
);

export default Airline; 