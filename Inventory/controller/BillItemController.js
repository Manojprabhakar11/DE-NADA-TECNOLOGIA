const BillItem = require("../models/ItemBill");

exports.createBillItem = async (req, res) => {
  try {
    const billItem = await BillItem.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        content: billItem,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error?.message,
    });
  }
};

exports.getBillItems = async (req, res) => {
  try {
    const page = parseInt(req.query?.page) || 1;
    const limit = parseInt(req.query?.limit) || 10;
    const search = req.query?.search || "";

    const filter = search
      ? { itemId: { $regex: new RegExp(search, "i") } }
      : {};

    const billItems = await BillItem.find(filter)
      .sort({ _id: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalBillItems = await BillItem.countDocuments(filter);
    const totalPages = Math.ceil(totalBillItems / limit);

    res.status(200).json({
      status: "success",
      data: {
        page,
        totalPages,
        limit,
        totalBillItems,
        content: billItems,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error?.message,
    });
  }
};

exports.getBillItemById = async (req, res) => {
  try {
    const billItem = await BillItem.findById(req.params?.id);
    if (!billItem) {
      throw new Error("Bill item not found");
    }
    res.status(200).json({
      status: "success",
      data: {
        content: billItem,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error?.message,
    });
  }
};

exports.updateBillItem = async (req, res) => {
  try {
    const billItem = await BillItem.findByIdAndUpdate(
      req.params?.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!billItem) {
      throw new Error("Bill item not found or failed to update");
    }
    res.status(200).json({
      status: "success",
      data: {
        content: billItem,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error?.message,
    });
  }
};

exports.deleteBillItem = async (req, res) => {
  try {
    const billItem = await BillItem.findByIdAndDelete(req.params?.id);
    if (!billItem) {
      throw new Error("Bill item not found or failed to delete");
    }
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error?.message,
    });
  }
};
