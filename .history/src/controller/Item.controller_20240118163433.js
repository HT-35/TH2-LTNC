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

const GetAllItemController = async (req, res) => {
  try {
    // const id = req.params.id;
    // console.log(id);

    const data = await ItemModel.find({});
    console.log(data);
    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      status: false,
      data: error,
    });
  }
};

const GetAllItemController = async (req, res) => {
  try {
    // const id = req.params.id;
    // console.log(id);

    const data = await ItemModel.find({});
    console.log(data);
    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      status: false,
      data: error,
    });
  }
};

module.exports = {
  CreateItemController,
  GetAllItemController,
};
