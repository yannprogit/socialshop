const { Sequelize } = require('sequelize');
const config = require('../config/config');

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
    likes: require('../models/likesModel.js')(sequelize),
    images: require('../models/imagesModel.js')(sequelize),
    comments: require('../models/commentsModel.js')(sequelize),
    favorites: require('../models/favoritesModel.js')(sequelize),
    conversations: require('../models/conversationsModel.js')(sequelize),
    signals: require('../models/signalsModel.js')(sequelize),
    messages: require('../models/messagesModel.js')(sequelize),
    medias: require('../models/mediasModel.js')(sequelize),
    shares: require('../models/sharesModel.js')(sequelize),
    subscribes: require('../models/subscribesModel.js')(sequelize),
    texts: require('../models/textsModel.js')(sequelize),
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

//Likes
sequelize.models.likes.belongsTo(sequelize.models.users, { foreignKey: 'idUser' , targetKey: 'idUser', as: 'likeToUser'});
sequelize.models.likes.belongsTo(sequelize.models.postes, { foreignKey: 'posteTag' , targetKey: 'tag', as: 'likeToPoste'});

//Favorites
sequelize.models.favorites.belongsTo(sequelize.models.users, { foreignKey: 'idUser' , targetKey: 'idUser', as: 'favoriteToUser'});
sequelize.models.favorites.belongsTo(sequelize.models.postes, { foreignKey: 'posteTag' , targetKey: 'tag', as: 'favoriteToPoste'});

//Images 
sequelize.models.images.belongsTo(sequelize.models.products, { foreignKey: 'productTag' , targetKey: 'tag', as: 'imagesToProduct'});

//Comments
sequelize.models.comments.belongsTo(sequelize.models.users, { foreignKey: 'idUser' , targetKey: 'idUser', as: 'commentToUser'});
sequelize.models.comments.belongsTo(sequelize.models.postes, { foreignKey: 'posteTag' , targetKey: 'tag', as: 'commentToPoste'});