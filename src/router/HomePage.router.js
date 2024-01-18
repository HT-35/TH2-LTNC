const express = require("express");
const HomeRouter = express.Router();

const { helloController } = require("../controller/homepage");
HomeRouter.get("/", helloController);

module.exports = { HomeRouter };
