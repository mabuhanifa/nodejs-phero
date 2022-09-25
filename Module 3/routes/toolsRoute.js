/** 
 @api {post} /tools all tools

*/

const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("tools found");
// });

router.route("/").get((req, res) => {
  res.send("tools found");
});

module.exports = router;
