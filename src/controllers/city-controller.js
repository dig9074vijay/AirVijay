const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { successResponse, errorResponse } = require("../utils/common");

/**
 * City Controller
 * Handles requests related to cities
 * POST /city
 * request body: { name}
 */

async function createCity(req, res) {
  try {
    const cityData = req.body;
    const city = await CityService.createCity(cityData);
    successResponse.message = "City created successfully";
    successResponse.data = city;
    res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to create city";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

async function getCities(req, res) {
  try {
    const cities = await CityService.getCities();
    successResponse.message = "Cities fetched successfully";
    successResponse.data = cities;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to fetch cities";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

/**
 * City Controller
 * Handles requests related to airplanes
 * GET /city/:id
 */
async function getCity(req, res) {
  try {
    const city = await CityService.getCity(req.params.id);
    successResponse.message = "City fetched successfully";
    successResponse.data = city;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to fetch cities";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

/**
 * City Controller
 * Handles requests related to cities
 * DELETE /city/:id
 */

async function deleteCity(req, res) {
  try {
    const city = await CityService.deleteCity(req.params.id);
    successResponse.message = "City deleted successfully";
    successResponse.data = city;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to delete city";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

/**
 * City Controller
 * Handles requests related to cities
 * PATCH /city/:id
 */

async function updateCity(req, res) {
  try {
    const city = await CityService.updateCity(req.params.id, req.body);
    successResponse.message = "City updated successfully";
    successResponse.data = city;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.message = "Failed to update city";
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
  deleteCity,
  updateCity,
};
