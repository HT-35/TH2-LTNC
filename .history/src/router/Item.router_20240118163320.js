const express = require("express");
const ItemRouter = express.Router();

const {
  CreateItemController,
  GetAllItemController,
} = require("../controller/Item.controller");
ItemRouter.post("/", CreateItemController);

ItemRouter.get("/", GetItemControGetAllItemControllerller);

module.exports = { ItemRouter };