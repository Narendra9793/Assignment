const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
    process.env.DBName,
    process.env.USER,
    process.env.PASSWORD,
    {
      host: process.env.HOST,
      dialect: "mysql",
    }
  );


const dbconection = async () => {

  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");

    await sequelize.sync(); 
    console.log("Database synced");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};


module.exports = { dbconection, sequelize };
