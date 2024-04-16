const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    idUser: {
      type: DataTypes.STRING(15),
      primaryKey: true,
    },
    state: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(12),
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(100),
    },
    date_creation: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    date_birth: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address_supplement: {
      type: DataTypes.STRING(50),
    },
  });
  
  return User;
};
