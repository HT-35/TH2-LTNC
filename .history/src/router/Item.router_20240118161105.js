const express = require("express");
const ItemRouter = express.Router();

const { CreateItemController } = require("../controller/Item.controller");
root.post("/", CreateItemController);

module.exports = { root };
