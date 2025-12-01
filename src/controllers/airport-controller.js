const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { successResponse, errorResponse } = require("../utils/common");
const { getAirport, deleteAirport } = require("../services/airport-service");

/**
 * Airport Controller
 * Handles requests related to airports
 * POST /airport
 * request body: { name, code, address,cityId }
 */

async function createAirport(req, res) {
  try {
    const airportData = req.body;
    const airport = await AirportService.createAirport(airportData);
    successResponse.message = "Airport created successfully";
    successResponse.data = airport;
    res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to create airport";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    successResponse.message = "Airports fetched successfully";
    successResponse.data = airports;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to fetch airports";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

/**
 * Airport Controller
 * Handles requests related to airplanes
 * GET /airport/:id
 */
async function getAirplane(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    successResponse.message = "Airport fetched successfully";
    successResponse.data = airport;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to fetch airports";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

/**
 * Airport Controller
 * Handles requests related to airplanes
 * DELETE /airport/:id
 */

async function deleteAirplane(req, res) {
  try {
    const airport = await AirportService.deleteAirport(req.params.id);
    successResponse.message = "Airport deleted successfully";
    successResponse.data = airport;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to delete airport";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

/**
 * Airport Controller
 * Handles requests related to airplanes
 * PATCH /airport/:id
 */

async function updateAirport(req, res) {
  try {
    const airport = await AirportService.updateAirport(req.params.id, req.body);
    successResponse.message = "Airport updated successfully";
    successResponse.data = airport;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to update airport";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  deleteAirport,
  updateAirport,
};
