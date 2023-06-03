const Joi = require("joi").extend(require("@joi/date"));

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  photo: Joi.string().required(),
});

const orderSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  totalPrice: Joi.number().required(),
  products: Joi.array().items(productSchema).required(),
  date: Joi.date().format("DD.MM.YYYY").required(),
});

const searchOrderSchema = Joi.object({
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
});

module.exports = { orderSchema, searchOrderSchema };
