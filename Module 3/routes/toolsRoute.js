const express = require("express");
const {
  getTools,
  getTool,
  createTool,
  updateTool,
  deleteTool,
} = require("../controllers/toolsController");
const viewCount = require("../middleware/viewCount");
const router = express.Router();

router.route("/").get(viewCount, getTools).post(createTool);

router.route("/:id").get(getTool).patch(updateTool).delete(deleteTool);

module.exports = router;
