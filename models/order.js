const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  phone: { type: String },
  email: { type: String },
  totalPrice: { type: Number },
  products: [
    {
      name: { type: String },
      price: { type: Number },
      photo: { type: String },
    },
  ],
});

const Order = mongoose.model("orders", orderSchema);

module.exports = {
  Order,
};
