const express = require("express");

const app = express();

const port = 3000;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/productdb");
    console.log("connect successfull!");
  } catch (error) {
    console.log(error);
  }
};

connectDB();


app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("run on : localhost:3000");
});
