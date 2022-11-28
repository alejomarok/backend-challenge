import Sequelize from "sequelize";


export const sequelize = new Sequelize (
    "nuevabase", 
    "postgres", 
    "wannabe",
    {
    host: "localhost",
    dialect: "postgres",

})