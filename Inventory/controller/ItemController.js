const Item = require("../models/Items");

exports.createItem = app.post("/api/items", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        content: item,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error?.message,
    });
  }
});

exports.getItems = app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json({
      status: "success",
      data: {
        content: items,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error?.message,
    });
  }
});

exports.updateItem = app.put("/api/items/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      throw new Error("The given item is failed to update");
    }
    res.status(200).json({
      status: "success",
      data: {
        content: item,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error?.message,
    });
  }
});

exports.deleteItem = app.delete("/api/items/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params?.id);
    if (!item) {
      throw new Error("The given item is failed to delete");
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
});
