const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  id: String,
});

const deliverySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  products: [productSchema],
  restaurant: String,
});

const Delivery = mongoose.model("delivery_list", deliverySchema);
console.log(Delivery);
module.exports = { Delivery };
