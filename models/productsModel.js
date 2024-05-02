const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const products = sequelize.define('products', {
    tag: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  });

  return products;
};
