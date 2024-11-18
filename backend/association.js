const { sequelize } = require("./config/db");
const User = require("./models/user-model");
const Contact = require("./models/contact-model");

// Define associations
User.hasMany(Contact, {
  foreignKey: "userId", // Foreign key in the Contact table
  onDelete: "CASCADE", // Deletes contacts when a user is deleted
});
Contact.belongsTo(User, {
  foreignKey: "userId", // Defines the relationship back to User
});

// // Sync models with the database
// const associations = async () => {
//   try {
//     await sequelize.sync({ force: true });
//     console.log("Models synced with the database.");
//     console.log("Registered models:", sequelize.models);
//   } catch (error) {
//     console.error("Error syncing models:", error);
//   }
// };

// module.exports = { associations };
