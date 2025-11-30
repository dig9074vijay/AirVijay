const { Logger } = require("../config");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      Logger.error(
        "Something went wrong in the Crud Repository : create method"
      );
      throw error;
    }
  }

  async destroy(data) {
    try {
      const result = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return result;
    } catch (error) {
      Logger.error(
        "Something went wrong in the Crud Repository : destroy method"
      );
      throw error;
    }
  }

  async get(data) {
    try {
      const result = await this.model.findByPk(data);
      return result;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repository : get method");
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      Logger.error(
        "Something went wrong in the Crud Repository : getAll method"
      );
      throw error;
    }
  }

  async update(data, id) {
    try {
      const result = await this.model.update(data, {
        where: { id: id },
      });
      return result;
    } catch (error) {
      Logger.error(
        "Something went wrong in the Crud Repository : update method"
      );
      throw error;
    }
  }
}

module.exports = CrudRepository;
