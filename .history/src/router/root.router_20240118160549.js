const express = require("express");
const root = express.Router();
const {helloController} = require('../')
root.get("/",helloController);

module.exports = { root };
