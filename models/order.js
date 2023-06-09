const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  phone: { type: String },
  email: { type: String },
  totalPrice: { type: Number },
  date: {
    type: Date,
  },
  products: [
    {
      name: { type: String },
      price: { type: Number },
      photo: { type: String },
      quantity: { type: Number },
    },
  ],
});

const Order = mongoose.model("orders", orderSchema);

module.exports = {
  Order,
};
