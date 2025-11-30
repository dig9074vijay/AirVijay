const express = require("express");
const router = express.Router();
const { infoController } = require("../../controllers");

// Define your v1 routes here
router.get("/", infoController.info);

module.exports = router;
