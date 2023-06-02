const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  products: [
    {
      name: { type: String },
      price: { type: Number },
      photo: { type: String },
    },
  ],
  name: { type: String },
});

const Delivery = mongoose.model("deliverys", deliverySchema);

module.exports = {
  Delivery,
};
