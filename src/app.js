const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes/index");

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
// app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

module.exports = app;
