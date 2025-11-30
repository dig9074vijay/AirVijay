const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { successResponse, errorResponse } = require("../utils/common");

/**
 * Airplane Controller
 * Handles requests related to airplanes
 * POST /airplanes
 * request body: { modelNumber, capacity }
 */

async function createAirplane(req, res) {
  try {
    const airplaneData = req.body;
    const airplane = await AirplaneService.createAirplane(airplaneData);
    successResponse.message = "Airplane created successfully";
    successResponse.data = airplane;
    res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to create airplane";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    successResponse.message = "Airplanes fetched successfully";
    successResponse.data = airplanes;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to fetch airplanes";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

/**
 * Airplane Controller
 * Handles requests related to airplanes
 * GET /airplanes/:id
 */
async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    successResponse.message = "Airplane fetched successfully";
    successResponse.data = airplane;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to fetch airplanes";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

/**
 * Airplane Controller
 * Handles requests related to airplanes
 * DELETE /airplanes/:id
 */

async function deleteAirplane(req, res) {
  try {
    const airplane = await AirplaneService.deleteAirplane(req.params.id);
    successResponse.message = "Airplane deleted successfully";
    successResponse.data = airplane;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to delete airplane";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
};
