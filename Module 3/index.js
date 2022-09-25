const express = require("express");
const toolsRoute = require("./routes/toolsRoute.js");
const app = express();
const port = process.env.PORT || 5000;

app.use("/tools", toolsRoute);

app.get("/", (req, res) => {
  res.send(`Running CRUD server! on port ${port}`);
});

app.all("*", (req, res) => {
  res.send(`No Route found`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
