const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const publications = sequelize.define('publications', {
    tag: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING(200),
    },
    media: {
      type: DataTypes.STRING(50),
    },
  });

  return publications;
};
