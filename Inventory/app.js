const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/Route");

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "wrong url",
  });
});

module.exports = app;
