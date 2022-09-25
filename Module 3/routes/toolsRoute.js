const express = require("express");
const { getTools } = require("../controllers/toolsController");
const viewCount = require("../middleware/viewCount");
const router = express.Router();

router.route("/").get(viewCount, getTools);

module.exports = router;
