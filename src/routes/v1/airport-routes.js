const express = require("express");
const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");
const router = express.Router();

//POST /api/v1/airport
router.post(
  "/",
  AirportMiddlewares.validateCreateRequest,
  AirportController.createAirport
);

//GET /api/v1/airport/
router.get("/", AirportController.getAirports);

//GET /api/v1/airport/:id
router.get("/:id", AirportController.getAirport);
//DELETE /api/v1/airport/:id
router.delete("/:id", AirportController.deleteAirport);

//PATCH /api/v1/airport/:id
router.patch("/:id", AirportController.updateAirport);

module.exports = {
  airportRoutes: router,
};
