const { Order } = require("../../models/order");

const findOrder = async (req, res, next) => {
  const order = await Order.find(req.body);

  res.json({
    status: "success",
    code: 200,
    data: {
      order,
    },
  });
};

module.exports = { findOrder };
