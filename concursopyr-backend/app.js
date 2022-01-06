const express = require("express");
const cors = require("cors");
const app = express();
const { dbConnection } = require("./database");

//settings
app.set("port", process.env.PORT || 4000);

//Levantar la conexion a la DB
dbConnection();

//middlewares
app.use(cors());
app.use(express.json());

//routes

app.use("/api/auth", require("./src/routes/auth"));

app.use("/api/concurso", require("./src/routes/concurso"));

app.use("/api/juego", require("./src/routes/juego"));

module.exports = app;
