const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/productdb");
    console.log("connect successfull!");
  } catch (error) {
    console.log(error);
  }
};
