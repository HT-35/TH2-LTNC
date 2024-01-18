const { ItemModel } = require("../model/items.model");

const CreateItemController = async (req, res) => {
  try {
    const data = req.body;
    const { NameItem, Description, Price } = req.body;

    const Redescription = {
      TextDescription: description[0].TextDescription,
      ImageDescription: description[0].ImageDescription,
    };

    console.log({ NameItem, Description, Price });

    const createItem = await ItemModel.create({
      NameItem,
      Description: Redescription,
      Price,
    });
    console.log(createItem);
    // res.status(200).json({
    //   status: true,
    //   data: data,
    // });

    res.json(createItem);
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
