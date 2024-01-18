const { ItemModel } = require("../model/items.model");

const CreateItemController = async (req, res) => {
  try {
    const { NameItem, Description, Price } = req.body;

    const Redescription = {
      TextDescription: Description[0],
      ImageDescription: Description[1],
    };

    const createItem = await ItemModel.create({
      NameItem,
      Description: Redescription,
      Price,
    });
    res.status(200).json({
      status: true,
      data: createItem,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: false,
      data: error,
    });
  }
};

const GetItemController = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  res.status(200).json({
    status: true,
  });
};

module.exports = {
  CreateItemController,
};
