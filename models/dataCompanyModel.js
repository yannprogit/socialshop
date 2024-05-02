const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('dataCompany', {
        idCompany: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        siret: {
        type: DataTypes.STRING(50),
        },
        tva: {
        type: DataTypes.STRING(50),
        },
        etc: {
        type: DataTypes.STRING(50),
        },
        idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        }
    }, {
    tableName: 'dataCompany',
  })
};
