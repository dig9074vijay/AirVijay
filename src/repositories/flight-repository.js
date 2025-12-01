const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter) {
    const result = await Flight.findAll({ where: filter });
    if (!result) {
      throw new AppError(
        "Not able to find the resource",
        StatusCodes.NOT_FOUND
      );
    }
    return result;
  }
}

module.exports = FlightRepository;
