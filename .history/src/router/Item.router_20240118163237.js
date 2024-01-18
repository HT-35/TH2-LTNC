const express = require("express");
const ItemRouter = express.Router();

const {
  CreateItemController,
  GetItemController,
} = require("../controller/Item.controller");
ItemRouter.post("/", CreateItemController);

ItemRouter.get("/", CreateItemController);

module.exports = { ItemRouter };
