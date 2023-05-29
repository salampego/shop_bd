const { Delivery } = require("../../models/products");

const getDeliveryList = async (req, res, next) => {
  try {
    const delivery = await Delivery.find();
    res.json({
      status: "success",
      code: 200,
      data: {
        delivery,
      },
    });
  } catch (error) {
    console.log("Error fetching delivery data:", error);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Error fetching delivery data",
    });
  }
};

module.exports = {
  getDeliveryList,
};
