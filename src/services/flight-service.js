const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const { Op } = require("sequelize");
const AppError = require("../utils/errors/app-error");
const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    console.log(error);
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      console.log(explanation);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllFlights(query) {
  const customFilter = {};
  let sortFilter = [];
  const endingTripTime = " 23:59:00";
  if (query.trips) {
    customFilter.departureAirportId = query.trips.split("-")[0];
    customFilter.arrivalAirportId = query.trips.split("-")[1];
  }

  if (query.price) {
    [minPrice, maxPrice] = query.price.split("-");
    customFilter.price = {
      [Op.between]: [minPrice, maxPrice ? maxPrice : 10000],
    };
  }
  if (query.travellers) {
    customFilter.totalSeats = {
      [Op.gte]: parseInt(query.travellers),
    };
  }
  if (query.tripDate) {
    customFilter.departureTime = {
      [Op.between]: [query.tripDate, query.tripDate + endingTripTime],
    };
  }
  if (query.sort) {
    const params = query.sort.split(",");
    const sortFilters = params.map((param) => {
      return param.split("_");
    });
    sortFilter = sortFilters;
  }
  try {
    const flights = await flightRepository.getAllFlights(
      customFilter,
      sortFilter
    );
    return flights;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Cannot fetch data of airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight,
  getAllFlights,
};
