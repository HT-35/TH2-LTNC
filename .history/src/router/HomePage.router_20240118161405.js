const express = require("express");
const ItemRouter = express.Router();

const { helloController } = require("../controller/homepage");
const { CreateItemController } = require("../controller/Item.controller");
root.get("/", helloController);

module.exports = { root };
