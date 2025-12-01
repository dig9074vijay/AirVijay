const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    errorResponse.message = "Flight Number is required";
    const appError = new AppError(
      ["Fight number is missing in request body"],
      StatusCodes.BAD_REQUEST
    );
    errorResponse.error = appError;
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.airplaneId) {
    errorResponse.message = "Airplane Id is required";
    const appError = new AppError(
      ["Airplane Id is missing in request body"],
      StatusCodes.BAD_REQUEST
    );
    errorResponse.error = appError;
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.arrivalTime) {
    errorResponse.message = "Arrival Time is required";
    const appError = new AppError(
      ["Arrival Time is missing in request body"],
      StatusCodes.BAD_REQUEST
    );
    errorResponse.error = appError;
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.departureTime) {
    errorResponse.message = "Departure Time is required";
    const appError = new AppError(
      ["Departure Time is missing in request body"],
      StatusCodes.BAD_REQUEST
    );
    errorResponse.error = appError;
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.departureAirportId) {
    errorResponse.message = "Departure airport Id is required";
    const appError = new AppError(
      ["Departure airport Id is missing in request body"],
      StatusCodes.BAD_REQUEST
    );
    errorResponse.error = appError;
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.arrivalAirportId) {
    errorResponse.message = "Arrival airport Id is required";
    const appError = new AppError(
      ["Arrival airport Id is missing in request body"],
      StatusCodes.BAD_REQUEST
    );
    errorResponse.error = appError;
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.price) {
    errorResponse.message = "Price is required";
    const appError = new AppError(
      ["Price is missing in request body"],
      StatusCodes.BAD_REQUEST
    );
    errorResponse.error = appError;
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.totalSeats) {
    errorResponse.message = "totalSeats is required";
    const appError = new AppError(
      ["totalSeats is missing in request body"],
      StatusCodes.BAD_REQUEST
    );
    errorResponse.error = appError;
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  next();
}

module.exports = {
  validateCreateRequest,
};
