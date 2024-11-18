const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db'); 


const User = sequelize.define('User', {
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
        validate: {
            is: /^[0-9]{10}$/, 
        },
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



},
{
    tableName : 'users'
});

console.log(User === sequelize.models.User);


module.exports = User;



