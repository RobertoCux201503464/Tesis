const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));

app.use("",require("./src/routes/index"))

module.exports = app;