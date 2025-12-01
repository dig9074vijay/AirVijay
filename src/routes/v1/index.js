const express = require("express");
const router = express.Router();
const { infoController } = require("../../controllers");
const { airplaneRoutes } = require("./airplane-routes");
const { cityRoutes } = require("./city-routes");
const { airportRoutes } = require("./airport-routes");

// Define your v1 routes here
router.use("/airplanes", airplaneRoutes);
router.use("/city", cityRoutes);
router.use("/airport", airportRoutes);
router.get("/", infoController.info);

module.exports = router;
