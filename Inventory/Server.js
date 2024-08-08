const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./app");

const DB = process.env.DB;
mongoose.connect(DB, {
  useNewUrlParser: true,
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`${port}`);
});
