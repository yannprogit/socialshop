const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const subscribes = sequelize.define('subscribes', {
    idSuscriber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idTrackedAccount: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
  });

  return subscribes;
};
