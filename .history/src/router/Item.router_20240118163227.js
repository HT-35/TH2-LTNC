const express = require("express");
const ItemRouter = express.Router();

const {
  CreateItemController,
  GetItemController,
};
 = require("../controller/Item.controller");
ItemRouter.post("/", CreateItemController);

module.exports = { ItemRouter };
