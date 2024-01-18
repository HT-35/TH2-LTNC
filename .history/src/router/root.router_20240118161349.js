const express = require("express");
const root = express.Router();
const { helloController } = require("../controller/homepage");

root.use("/item", ItemRouter);

module.exports = { root };
