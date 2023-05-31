const { Delivery } = require("../../models/products");

const getDeliveryList = async (req, res, next) => {
  const delivery = await Delivery.find();
  res.json({
    status: "success",
    code: 200,
    data: {
      delivery,
    },
  });
};

module.exports = {
  getDeliveryList,
};
