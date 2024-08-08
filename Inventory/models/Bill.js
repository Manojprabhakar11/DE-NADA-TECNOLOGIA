const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  customerName: { type: String, required: true, index: true },
  date: { type: Date, default: Date.now(), required: true },
  totalAmount: { type: Number, required: true },
  items: [
    {
      itemId: { type: mongoose.Schema.ObjectId, ref: "Item", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
