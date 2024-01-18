const express = require("express");
const ItemRouter = express.Router();

const {
  CreateItemController,
  GetAllItemController,
  GetDetailItemController,
  DeleteItemByIdController,
} = require("../controller/Item.controller");
ItemRouter.post("/", CreateItemController);

ItemRouter.get("/:id", GetDetailItemController);
ItemRouter.get("/", GetAllItemController);
ItemRouter.get("/", GetAllItemController);

module.exports = { ItemRouter };
