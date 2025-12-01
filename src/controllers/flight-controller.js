const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { successResponse, errorResponse } = require("../utils/common");

/**
 * Flight Controller
 * Handles requests related to flights
 * POST /flight
 * request body: {}
 */

async function createFlight(req, res) {
  try {
    const flightData = req.body;
    const flight = await FlightService.createFlight(flightData);
    successResponse.message = "Flight created successfully";
    successResponse.data = flight;
    res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to create flight";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

async function getAllFlights(req, res) {
  try {
    const flights = await FlightService.getAllFlights(req.query);
    successResponse.message = "Flights fetched successfully";
    successResponse.data = flights;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.message = "Failed to fetch flights";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

module.exports = {
  createFlight,
  getAllFlights,
};
