const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRouter");
const contactRouter = require("./routes/contactRouter");
const { dbconection, sequelize } = require("./config/db");



dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/contacts", contactRouter);


sequelize.sync();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
  dbconection();
});
