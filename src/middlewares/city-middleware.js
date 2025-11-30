const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    errorResponse.message = "Name is required";
    const appError = new AppError(
      ["Name is missing in request body"],
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
