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

module.exports = {
  createAirplane,
};
