const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  NameItem: String,
  Image: String,
  description: String,
});
