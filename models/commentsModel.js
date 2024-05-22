const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const comments = sequelize.define('comments', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    posteTag: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    comment: {
        type: DataTypes.STRING,
    }
  });

  return comments;
};
