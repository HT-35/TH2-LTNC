const { ItemModel } = require("../model/items.model");

const CreateItemController = async (req, res) => {
  try {
      const data = req.body;
      const {NameItem,Description[0].TextDescription}
    console.log(data);

    //   const createItem = await ItemModel.create({})

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
};
