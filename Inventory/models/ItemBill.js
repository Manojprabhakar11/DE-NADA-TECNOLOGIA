const mongoose = require("mongoose");

const itemBillSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.ObjectId, ref: "Item", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const ItemBill = mongoose.model("ItemBill", itemBillSchema);
module.exports = ItemBill;
