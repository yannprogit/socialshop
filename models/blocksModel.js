const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const blocks = sequelize.define('blocks', {
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idBlockedUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
  });

  return blocks;
};
