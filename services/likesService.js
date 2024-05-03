//------------- Import -------------
const db = require('../models/index.js');

//------------- Methods -------------

exports.addLike = async (tag, id) => {
    like = await db.likes.findOne({
        where: {
            posteTag: tag,
            idUser: id
        }
    });
    if (like) {
        return db.likes.create({
            posteTag: tag,
            idUser: id,
            like: true
        });
    } else {
        return await db.likes.update({
            like: true
        }, 
        { where: {
            posteTag: tag,
            idUser: id,
            }
        });
    }
}

exports.delLike = async (tag, id) => {
    like = await db.likes.findOne({
        where: {
            posteTag: tag,
            idUser: id
        }
    });
    if (like) {
        return db.likes.create({
            posteTag: tag,
            idUser: id,
            like: false
        });
    } else {
        return await db.likes.update({
            like: false
        }, 
        { where: {
            posteTag: tag,
            idUser: id,
            }
        });
    }
}