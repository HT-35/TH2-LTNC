const express = require("express");

const app = express();

const port = 3000;

const bodyParser = require("body-parser");

const { root } = require("./src/router/root.router");

const { connectDB } = require("./src/config/connectDB");

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(root);

app.listen(port, () => {
  console.log("run on : localhost:3000");
});
