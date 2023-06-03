const { Order } = require("../../models/order");

const findOrder = async (req, res, next) => {
  const order = await Order.find(req.body);

  if (!order.length) {
    res.status(404).json({
      status: "Not Found",
      code: 404,
    });
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      order,
    },
  });
};

module.exports = { findOrder };
