const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const messages = sequelize.define('messages', {
    num: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idConversation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    sendToUser: {
      type: DataTypes.INTEGER,
    },
  });

  return messages;
};
