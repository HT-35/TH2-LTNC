const express = require("express");

const app = express();

const port = 3000;

const mongoose = require("")

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("run on : localhost:3000");
});
