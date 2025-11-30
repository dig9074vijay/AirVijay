const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  res.status(StatusCodes.OK).json({
    app: "AirVijay",
    version: "1.0.0",
    success: true,
    message: "Info retrieved successfully",
    error: {},
    data: {},
  });
};

module.exports = { info };
