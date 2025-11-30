const express = require("express");
const airplaneController = require("../../controllers/airplane-controller");
const router = express.Router();

router.post("/", airplaneController.createAirplane);

module.exports = {
  airplaneRoutes: router,
};
