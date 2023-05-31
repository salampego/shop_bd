const { Delivery } = require("../../models/products");
const { NotFound } = require("http-errors");

const getProductById = async (req, res, next) => {
  const { restrauntId } = req.params;
  const menu = await Delivery.findById(restrauntId);
  if (!menu) {
    throw new NotFound();
  }
  res.json({
    status: "success",
    code: 200,
    data: { menu },
  });
};

module.exports = { getProductById };
