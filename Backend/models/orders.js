const mongoose = require("mongoose");

const collection = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    cart: [
      {
        _id: { type: String },
        name: { type: String },
        image: { type: String },
        quantity: { type: Number },
      },
    ],
    amount: { type: Number },
    status: { type: String, default: "En attente.." },
    address: { type: Object, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", collection);
