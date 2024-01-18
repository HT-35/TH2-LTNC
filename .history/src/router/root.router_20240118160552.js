const express = require("express");
const root = express.Router();
const { helloController } = require("../controller/homepage");
root.get("/", helloController);

module.exports = { root };
