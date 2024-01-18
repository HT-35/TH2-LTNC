const express = require("express");

const app = express();

const port = 3000;



const { root } = require("./src/router/root.router");

const { connectDB } = require("./src/config/connectDB");

connectDB();

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(root);

app.listen(port, () => {
  console.log("run on : localhost:3000");
});
