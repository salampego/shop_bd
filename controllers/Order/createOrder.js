const { Order } = require("../../models/order");

const createOrder = async (req, res, next) => {
  const order = await Order.create(req.body);
  console.log(order);

  res.json({
    status: "success",
    code: 200,
    data: {
      order,
    },
  });
};

module.exports = {
  createOrder,
};
