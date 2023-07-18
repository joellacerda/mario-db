const express = require("express");
const { Sequelize } = require("sequelize");

const app = express();
const port = 3000;

// Set up connection to local PostgreSQL database
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
