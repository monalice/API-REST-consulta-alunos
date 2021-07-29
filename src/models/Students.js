const { Sequelize } = require('sequelize');
const db = require('../database');

const Student = db.define(
    'student',
    {
        name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        email: {
            allowNull: false,
            unique: true,
            type: Sequelize.STRING
        },
        cpf: {
            allowNull: false,
            unique: true,
            type: Sequelize.STRING,
        
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        }
    },
    {
        db,
        timestamps: false
    }
);

module.exports = Student;