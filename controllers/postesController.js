//------------- Import -------------
const { addProduct, getProducts, addImage, getProduct, getStocks, delProduct } = require('../services/postesService.js');
const fs = require('fs');
const path = require('path');

//------------- Methods -------------
//Add a product
exports.addProduct = async (req, res) => {
    
    const product = await addProduct(req.user.idUser, req.body.title, req.body.price, req.body.description, req.body.stocks);

    if (product) {
        res.status(201).json({success: true, product: product});
    } 
    else {
        res.status(400).json({success: false, message: "Une erreur s'est produite lors de l'ajout de votre produit"});
    }
}

exports.delProduct = async (req, res, idUser) => {
    const product = await getProduct(req.params.tag);

    if (!product) {
        res.status(404).json({success: false, message: "Ce produit n'existe pas"});
    } else if (product.productsToPostes.idUser!=idUser) {
        res.status(404).json({success: false, message: "Ce produit ne vous appartient pas"});
    } else {
        const deletedProduct = await delProduct(req.params.tag);
        if (deletedProduct) {
            res.status(204).send();
        } 
        else {
            res.status(400).json({success: false, message: "Une erreur s'est produite lors de la suppression de votre produit"});
        }
    }
}

exports.addProductImages = async (req, res) => {
    
    if (req.files && req.files.length > 0) {
        const productTag = req.body.tag;
        const productFolder = path.join(__dirname, '..', 'images', productTag.toString());

        if (!fs.existsSync(productFolder)) {
            fs.mkdirSync(productFolder, { recursive: true });
        }

        for (const file of req.files) {
            const image = await addImage(productTag);
            const imageFilePath = path.join(productFolder, image.num.toString() + ".png");
            fs.renameSync(file.path, imageFilePath);
        }

        res.status(200).json({ success: true });
    } else {
        res.status(400).json({ success: false, message: "Les images n'ont pas été uploadées" });
    }
}

exports.getProducts = async (req, res) => {
    const products = await getProducts();
    res.status(200).json({success: true, data: products});
}

exports.getStocks = async (req, res) => {
    const stocks = await getStocks(req.params.tag);
    res.status(200).json({success: true, data: stocks});
}

exports.getProduct = async (req, res) => {
    const product = await getProduct(req.params.tag);
    if (product) {
        res.status(200).json({success: true, data: product});   
    }
    else {
        res.status(404).json({success: false, message: "Ce produit n'existe pas"});   
    }
}