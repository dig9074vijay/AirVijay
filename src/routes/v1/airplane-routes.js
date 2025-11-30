const express = require("express");
const airplaneController = require("../../controllers/airplane-controller");
const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();

//POST /api/v1/airplanes
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  airplaneController.createAirplane
);

//GET /api/v1/airplanes/
router.get("/", airplaneController.getAirplanes);

//GET /api/v1/airplanes/:id
router.get("/:id", airplaneController.getAirplane);

//DELETE /api/v1/airplanes/:id
router.delete("/:id", airplaneController.deleteAirplane);

//PATCH /api/v1/airplanes/:id
router.patch("/:id", airplaneController.updateAirplane);

module.exports = {
  airplaneRoutes: router,
};
