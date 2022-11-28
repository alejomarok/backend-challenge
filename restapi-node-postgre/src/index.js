import app from './app.js'

import {sequelize} from './database/database.js';
import './models/airlines.models.js';
import './models/airports.models.js';
import './models/flights.models.js';





async function main () {

try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log("Conection has been established succesfully.");
    app.listen(3000);
    console.log('server is listening on port', 3000)
} catch (error) {
    console.error("Unable to connect to the database:", error)
}

}

main();