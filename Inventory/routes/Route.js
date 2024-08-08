const express = require("express");
const {
  createBill,
  getBills,
  getBillById,
  updateBill,
  deleteBill,
} = require("../controller/BillController");
const {
  createBillItem,
  getBillItems,
  getBillItemById,
  updateBillItem,
  deleteBillItem,
} = require("../controller/BillItemController");
const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} = require("../controller/ItemController");

const router = express.Router();

router.route("/api/items").post(createItem).get(getItems);
router.route("/api/items/:id").put(updateItem).delete(deleteItem);

router.route("/api/bills").post(createBill).get(getBills);

router
  .route("/api/bills/:id")
  .get(getBillById)
  .put(updateBill)
  .delete(deleteBill);

router.route("/api/bill-items").post(createBillItem).get(getBillItems);

router
  .route("/api/bill-items/:id")
  .get(getBillItemById)
  .put(updateBillItem)
  .delete(deleteBillItem);

module.exports = router;
