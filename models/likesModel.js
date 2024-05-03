const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const likes = sequelize.define('likes', {
    posteTag: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    like: {
        type: DataTypes.BOOLEAN,
    }
  });

  return likes;
};
