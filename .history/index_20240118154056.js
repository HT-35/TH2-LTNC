const express = require("express");

const app = express();

const port = 3000;

const mongoose = require("mongoose");

const mongoose.connect('mongodb://127.0.0.1:27017/myapp');



app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("run on : localhost:3000");
});
