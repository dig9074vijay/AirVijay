const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    errorResponse.message = "Model Number is required";
    const appError = new AppError(
      ["Model Number is missing in request body"],
      StatusCodes.BAD_REQUEST
    );
    errorResponse.error = appError;
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.capacity) {
    errorResponse.message = "Capacity is required";
    const appError = new AppError(
      ["Capacity is missing in request body"],
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
