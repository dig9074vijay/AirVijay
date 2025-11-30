const express = require("express");
const airplaneController = require("../../controllers/airplane-controller");
const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();

// /api/v1/airplanes
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  airplaneController.createAirplane
);

// /api/v1/airplanes/
router.get("/", airplaneController.getAirplanes);

// /api/v1/airplanes/:id
router.get("/:id", airplaneController.getAirplane);

module.exports = {
  airplaneRoutes: router,
};
