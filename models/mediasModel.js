const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const medias = sequelize.define('medias', {
    media: {
        type: DataTypes.STRING(50),
        primaryKey: true,
      },
      num: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
  });

  return medias;
};
