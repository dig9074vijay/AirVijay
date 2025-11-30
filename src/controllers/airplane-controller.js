const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");

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
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Airplane created successfully",
      data: airplane,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to create airplane",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAirplane,
};
