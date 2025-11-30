const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");
const router = express.Router();

//POST /api/v1/city
router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

//GET /api/v1/city/
router.get("/", CityController.getCities);

//GET /api/v1/city/:id
router.get("/:id", CityController.getCity);

//DELETE /api/v1/city/:id
router.delete("/:id", CityController.deleteCity);

//PATCH /api/v1/city/:id
router.patch("/:id", CityController.updateCity);
module.exports = {
  cityRoutes: router,
};
