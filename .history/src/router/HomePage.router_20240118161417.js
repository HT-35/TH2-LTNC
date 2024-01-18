const express = require("express");
const HomeRouter = express.Router();

const { CreateItemController } = require("../controller/Item.controller");
HomeRouter.get("/", helloController);

module.exports = { root };
