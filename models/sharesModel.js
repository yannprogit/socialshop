const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const shares = sequelize.define('shares', {
    tag: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    num: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
  });

  return shares;
};
