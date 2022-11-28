import Sequelize from 'sequelize'; 


const sequelize = new Sequelize ('challenge', 'postgres', 'wannabe',{
    host: 'localhost',
    dialect: 'postgres',

})