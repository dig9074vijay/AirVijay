const { Logger } = require("../config");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const result = await this.model.create(data);
    return result;
  }

  async destroy(data) {
    const result = await this.model.destroy({
      where: {
        id: data,
      },
    });
    return result;
  }

  async get(data) {
    const result = await this.model.findByPk(data);
    return result;
  }

  async getAll() {
    const result = await this.model.findAll();
    return result;
  }

  async update(data, id) {
    const result = await this.model.update(data, {
      where: { id: id },
    });
    return result;
  }
}

module.exports = CrudRepository;
