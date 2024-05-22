//------------- Import -------------
const db = require('../models/index.js');

//------------- Methods -------------

exports.addComment = async (comment, tag, id) => {
    return db.comments.create({
        posteTag: tag,
        idUser: id,
        comment
    });
}

exports.delComment = async (id) => {
    return await db.comments.destroy({
        where: {
            id
        }
    });
}

exports.updComment = async (id, comment) => {
    return await db.comments.update({
        comment
    }, 
    {
        where: {
            id
        }
    });
}

exports.getComment = async (id) => {
    return await db.comments.findOne({
        where: {
          id
        }
      });
}

exports.getComments = async (tag) => {
    return await db.comments.findAll({
        where: {
          posteTag : tag
        }
      });
}