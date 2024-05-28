const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const signals = sequelize.define('signals', {
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idSignaledUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
  });

  return signals;
};
