const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log("MongoDB local server connected".red.bold);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening on port ".yellow.bold + port  );
});
