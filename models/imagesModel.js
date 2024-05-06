const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const images = sequelize.define('images', {

    num: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productTag: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
  });

  return images;
};
