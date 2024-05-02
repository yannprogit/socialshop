const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const stocks = sequelize.define('stocks', {
    size: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idProduct: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  });

  return stocks;
};
