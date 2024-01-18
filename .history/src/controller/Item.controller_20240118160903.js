const { ItemModel } = require("../model/items.model");

const CreateItemController = async (req, res) => {

try {
    


  const data = req.body;
  console.log(data);
  res.status(200).json({
    status: true,
    data: data,
  });
};
