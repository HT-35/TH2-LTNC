const mongoose = require("mongoose");

const Description = new mongoose.Schema({
  ImageDescription: String,
  TextDescription: String,
});

const itemsSchema = new mongoose.Schema({
  NameItem: {type String},
  Image: String,
  Description: Description,
  Price: Number,
});
