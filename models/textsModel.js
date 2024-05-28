const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const texts = sequelize.define('texts', {
    text: {
        type: DataTypes.STRING(50),
        primaryKey: true,
      },
      num: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
  });

  return texts;
};
