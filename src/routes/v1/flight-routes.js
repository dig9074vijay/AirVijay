const express = require("express");
const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");
const router = express.Router();

//POST /api/v1/flight
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

//GET /api/v1/flight
router.get("/", FlightController.getAllFlights);

// //GET /api/v1/airport/
// router.get("/", AirportController.getAirports);

// //GET /api/v1/airport/:id
// router.get("/:id", AirportController.getAirport);
// //DELETE /api/v1/airport/:id
// router.delete("/:id", AirportController.deleteAirport);

// //PATCH /api/v1/airport/:id
// router.patch("/:id", AirportController.updateAirport);

module.exports = {
  flightRoutes: router,
};
