const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const postes = sequelize.define('postes', {
    tag: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return postes;
};
