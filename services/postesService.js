//------------- Import -------------
const db = require('../models/index.js');

//------------- Methods -------------

exports.getProducts = async () => {
    return await db.postes.findAll({
        include: {
          model: db.products,
          attributes: ['price', 'description'],
          as: 'productsToPostes'
        }
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

        return poste.tag;

    } catch (error) {
        console.log(error);
        return false;
    }
}