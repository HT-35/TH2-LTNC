const express = require("express");
const ItemRouter = express.Router();
const { helloController } = require("../controller/homepage");
root.get("/", helloController);

module.exports = { root };
