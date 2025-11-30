const express = require("express");
const router = express.Router();
const { infoController } = require("../../controllers");
const { airplaneRoutes } = require("./airplane-routes");
const { cityRoutes } = require("./city-routes");

// Define your v1 routes here
router.use("/airplanes", airplaneRoutes);
router.use("/city", cityRoutes);
router.get("/", infoController.info);

module.exports = router;
