const express = require("express");
const root = express.Router();

const { ItemRouter } = require("./Item.router");
root.use("/items", ItemRouter);

module.exports = { root };
