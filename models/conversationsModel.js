const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const conversations = sequelize.define('conversations', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user1: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    user2: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });

  return conversations;
};
