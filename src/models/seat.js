"use strict";
const { Model } = require("sequelize");
const { Enum } = require("../utils/common");
const { ECONOMY, BUSINESS, FIRST_CLASS, PREMIUM_ECONOMY } = Enum.SEAT_TYPE;
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
        as: "airplane_details",
      });
    }
  }
  Seat.init(
    {
      row: { allowNull: false, type: DataTypes.INTEGER },
      col: { allowNull: false, type: DataTypes.STRING },
      airplaneId: { allowNull: false, type: DataTypes.INTEGER },
      type: {
        type: DataTypes.ENUM,
        values: [ECONOMY, BUSINESS, FIRST_CLASS, PREMIUM_ECONOMY],
        defaultValue: ECONOMY,
      },
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
