const express = require("express");
const {
  getTools,
  getTool,
  createTool,
  updateTool,
} = require("../controllers/toolsController");
const viewCount = require("../middleware/viewCount");
const router = express.Router();

router.route("/").get(viewCount, getTools).post(createTool);

router.route("/:id").get(getTool).patch(updateTool);

module.exports = router;
