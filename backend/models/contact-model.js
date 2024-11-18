const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db'); 

const Contact = sequelize.define('Contact', {

    firstName: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true, 
        },
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },

    job_title: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

},{
    tableName : "contacts"
});
console.log(Contact ===  sequelize.model.Contact);

module.exports = Contact;



