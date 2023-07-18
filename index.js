const express = require("express");
const { Sequelize } = require("sequelize");

const app = express();
const port = 5432;
const db_name = `${process.env.DB_NAME}`;
const db_user = `${process.env.DB_USER}`;
const db_pw = `${process.env.DB_PW}`;
const db_host = `${process.env.DB_HOST}`;

// Set up connection to local PostgreSQL database
const sequelize = new Sequelize(db_name, db_user, db_pw, {
  host: db_host,
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
