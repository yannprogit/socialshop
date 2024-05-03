const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const favorites = sequelize.define('favorites', {
    posteTag: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    favorite: {
        type: DataTypes.BOOLEAN,
    }
  });

  return favorites;
};
