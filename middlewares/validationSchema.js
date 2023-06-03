const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  photo: Joi.string().required(),
});

// Основна схема
const orderSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  totalPrice: Joi.number().required,
  products: Joi.array().items(productSchema).required(),
});

module.exports = { orderSchema };
