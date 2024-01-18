const express = require("express");
const root = express.Router();
const { helloController } = require("../controller/homepage");

const { ItemRouter } = require("./Item.router");
root.get("/", helloController);
root.use("/item", ItemRouter);

module.exports = { root };
