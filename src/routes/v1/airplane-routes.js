const express = require("express");
const airplaneController = require("../../controllers/airplane-controller");
const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();

router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  airplaneController.createAirplane
);

module.exports = {
  airplaneRoutes: router,
};
