const mongoose = require("mongoose");

const Description = new mongoose.Schema({
  ImageDescription: String,
  TextDescription: String,
});

const itemsSchema = new mongoose.Schema({
  NameItem: { type: String, require: true },
  Image: String,
  Description: [
    {
      ImageDescription: String,
      TextDescription: String,
    },
  ],
  Price: Number,
});
