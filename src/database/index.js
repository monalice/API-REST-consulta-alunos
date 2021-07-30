require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.URI, {
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize;