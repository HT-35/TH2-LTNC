const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  NameItem: { type: String, require: true },
  Description: [
    {
      ImageDescription: String,
      TextDescription: String,
    },
  ],
  Price: { type: Number, require: true },
});

const ItemModel = mongoose.model("ItemModel", itemsSchema);

module.exports = {
  ItemModel,
};
