const Bill = require("../models/Bill");
const Item = require("../models/Items");

exports.createBill = async (req, res) => {
  try {
    const bill = await Bill.create([req.body]);

    req?.body?.items?.forEach(async (item) => {
      await Item.findByIdAndUpdate(item?.itemId, {
        $inc: { quantity: -item?.quantity },
      });
    });

    res.status(201).json({
      status: "success",
      data: { content: bill[0] },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

exports.getBills = async (req, res) => {
  try {
    const page = parseInt(req.query?.page) || 1;
    const limit = parseInt(req.query?.limit) || 10;
    const search = req.query?.search || "";

    const filter = search
      ? { customerName: { $regex: new RegExp(search, "i") } }
      : {};

    const bills = await Bill.find(filter)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalBills = await Bill.countDocuments(filter);
    const totalPages = Math.ceil(totalBills / limit);

    res.status(200).json({
      status: "success",
      data: {
        page,
        totalPages,
        limit,
        totalBills,
        content: bills,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error?.message,
    });
  }
};

exports.getBillById = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params?.id);
    if (!bill) {
      throw new Error("Bill not found");
    }
    res.status(200).json({
      status: "success",
      data: {
        content: bill,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error?.message,
    });
  }
};

exports.updateBill = async (req, res) => {
  try {
    const bill = await Bill.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bill) {
      throw new Error("Bill not found or failed to update");
    }
    res.status(200).json({
      status: "success",
      data: {
        content: bill,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error?.message,
    });
  }
};

exports.deleteBill = async (req, res) => {
  try {
    const bill = await Bill.findByIdAndDelete(req.params?.id);
    if (!bill) {
      throw new Error("Bill not found or failed to delete");
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
