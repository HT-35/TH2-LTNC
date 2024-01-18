const { ItemModel } = require("../model/items.model");

const CreateItemController = async (req, res) => {
  try {
    const data = req.body;
    const { NameItem, Description, Price } = req.body;

    const Redescription = {
      TextDescription: Description[0],
      ImageDescription: Description[1],
    };

    // console.log({ NameItem, Description, Price });

    const createItem = await ItemModel.create({
      NameItem,
      Description: Redescription,
      Price,
    });
    // res.status(200).json({
    //   status: true,
    //   data: data,
    // });

    res.json(Description);
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
