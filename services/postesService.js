//------------- Import -------------
const db = require('../models/index.js');

//------------- Methods -------------

exports.getProducts = async () => {
    return await db.products.findAll({
        include: {
          model: db.postes,
          attributes: ['title', 'idUser'],
          as: 'productsToPostes'
        }
      });
}

exports.delProduct = async (tag) => {
    const delStocks = await db.stocks.destroy({
        where: {
          idProduct: tag
        }
      });
    const delImages = await db.images.destroy({
        where: {
          productTag: tag
        }
      });
    
      const delProduct = await db.products.destroy({
        where: {
          tag
        }
      });

    if (delImages&&delStocks&&delProduct) {
        return await db.postes.destroy({
            where: {
              tag
            }
          });
    } else {
        return false;
    }
}

exports.getStocks = async (tag) => {
    return await db.stocks.findAll({
        where: {
          idProduct: tag
        }
      });
}

exports.getImages = async (tag) => {
    return await db.images.findAll({
        where: {
          productTag: tag
        }
      });
}

exports.delImage = async (num) => {
    return await db.images.destroy({
        where: {
          num
        }
      });
}

exports.getProduct = async (tag) => {
    return await db.products.findOne({
        where: { tag: tag },
        include: [
            {
                model: db.postes,
                attributes: ['title', 'idUser'],
                as: 'productsToPostes'
            },
        ]
    });
}

exports.addProduct = async (idUser, title, price, description, stocks) => {
    try {
        const poste = await db.postes.create({
            title,
            idUser
        });
        const tag = poste.tag;

        const product = await db.products.create({
            tag,
            price,
            description
        });

        await Promise.all(stocks.map(async (stock) => {
            await db.stocks.create({
                idProduct: tag,
                size: stock.size,
                quantity: stock.quantity
            });
        }));

        return await db.products.findOne({
            where: { tag: tag },
            include: {
              model: db.postes,
              attributes: ['title', 'idUser'],
              as: 'productsToPostes'
            }
        });

    } catch (error) {
        console.log(error);
        return false;
    }
}

exports.addImage = async (tag) => {
    try {
        return await db.images.create({
            productTag: tag
        });

    } catch (error) {
        console.log(error);
        return false;
    }
}