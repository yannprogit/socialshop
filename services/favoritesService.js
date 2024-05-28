//------------- Import -------------
const db = require('../models/index.js');

//------------- Methods -------------

exports.addFavorite = async (tag, id) => {
    favorite = await db.favorites.findOne({
        where: {
            posteTag: tag,
            idUser: id
        }
    });
    if (!favorite) {
        return db.favorites.create({
            posteTag: tag,
            idUser: id,
            favorite: true
        });
    } else {
        return await db.favorites.update({
            favorite: true
        }, 
        { where: {
            posteTag: tag,
            idUser: id,
            }
        });
    }
}

exports.delFavorite = async (tag, id) => {
    favorite = await db.favorites.findOne({
        where: {
            posteTag: tag,
            idUser: id
        }
    });
    if (!favorite) {
        return db.favorites.create({
            posteTag: tag,
            idUser: id,
            favorite: false
        });
    } else {
        return await db.favorites.update({
            favorite: false
        }, 
        { where: {
            posteTag: tag,
            idUser: id,
            }
        });
    }
}

exports.getFavorite = async (idUser, tag) => {
    return await db.favorites.findOne({
        where: {
            idUser: idUser,
            posteTag: tag
        }
    });
}