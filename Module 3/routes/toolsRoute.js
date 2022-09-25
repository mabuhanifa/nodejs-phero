const express = require("express");
const { getTools } = require("../controllers/toolsController");
const router = express.Router();

router.route("/").get(getTools);

module.exports = router;
