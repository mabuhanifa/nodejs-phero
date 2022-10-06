const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB server connected");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening on port " + port);
});
