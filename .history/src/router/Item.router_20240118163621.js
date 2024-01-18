const express = require("express");
const ItemRouter = express.Router();

const {
  CreateItemController,
  GetAllItemController,
  GetDetailItemController,
} = require("../controller/Item.controller");
ItemRouter.post("/", CreateItemController);

ItemRouter.get("/:id", GetDetailItemController);
ItemRouter.get("/", GetAllItemController);

module.exports = { ItemRouter };