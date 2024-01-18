const mongoose = require("mongoose");

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

const ItemModel = mongoose.model("ItemModel", itemsSchema);


module.exports()