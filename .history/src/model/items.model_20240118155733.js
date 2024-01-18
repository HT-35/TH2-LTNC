const mongoose = require("mongoose");

const Description = new mongoose.Schema({
  Image: String,
  
});

const itemsSchema = new mongoose.Schema({
  NameItem: String,
  Image: String,
  Description: String,
  Price: Number,
});
