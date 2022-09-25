const express = require("express");
const viewCount = require("./middleware/viewCount.js");
const toolsRoute = require("./routes/toolsRoute.js");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.text());
// app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/tools", toolsRoute);

/*----------------static html----------------*/
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "./public/index.html");
// });

app.get("/", (req, res) => {
  res.render("home.ejs", {
    id: 2,
  });
});

app.all("*", (req, res) => {
  res.send(`No Route found`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
