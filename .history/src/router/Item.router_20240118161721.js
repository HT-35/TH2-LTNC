const express = require("express");
const ItemRouter = express.Router();

const { CreateItemController } = require("../controller/Item.controller");
ItemRouter.post("/", CreateItemController);

module.exports = { ItemRouter };
