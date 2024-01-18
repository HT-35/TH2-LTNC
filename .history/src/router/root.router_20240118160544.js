const express = require("express");
const root = express.Router();
const {helloController}
root.get("/",helloController);

module.exports = { root };
