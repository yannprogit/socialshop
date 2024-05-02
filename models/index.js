const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

module.exports = {
  sequelize,
    users: require('../models/usersModel.js')(sequelize),
    dataCompany: require('../models/dataCompanyModel.js')(sequelize),
    postes: require('../models/postesModel.js')(sequelize),
    publications: require('../models/publicationsModel.js')(sequelize),
    stocks: require('../models/stocksModel.js')(sequelize),
    products: require('../models/productsModel.js')(sequelize),
}

//Define associations between models
//DataCompany
sequelize.models.dataCompany.belongsTo(sequelize.models.users, { foreignKey: 'idUser' , targetKey: 'idUser', as: 'dataCompanyToUser'});

//Stocks
sequelize.models.stocks.belongsTo(sequelize.models.products, { foreignKey: 'idProduct' , targetKey: 'tag', as: 'stockToProduct'});

//Products
sequelize.models.products.belongsTo(sequelize.models.postes, { foreignKey: 'tag' , targetKey: 'tag', as: 'productsToPostes'});

//Publications
sequelize.models.publications.belongsTo(sequelize.models.postes, { foreignKey: 'tag' , targetKey: 'tag', as: 'publicationsToPostes'});

//Postes
sequelize.models.postes.belongsTo(sequelize.models.users, { foreignKey: 'idUser' , targetKey: 'idUser', as: 'postesToUser'});