const express = require("express");
const root = express.Router();
const { helloController } = require("../controller/homepage");

const 
root.get("/", helloController);

module.exports = { root };
