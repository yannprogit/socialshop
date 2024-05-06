//------------- Import -------------
const { addProduct, getProducts, addImage } = require('../services/postesService.js');
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

exports.addProductImages = async (req, res) => {
    
    if (req.file) {
        const productTag = req.body.tag;
        const productFolder = path.join(__dirname, '..', 'images', productTag.toString());
        if (!fs.existsSync(productFolder)) {
            fs.mkdirSync(productFolder, { recursive: true });
        }
        const image = await addImage(productTag);
        const imageFilePath = path.join(productFolder, image.num);
        fs.renameSync(req.file.path, imageFilePath);
        res.status(200).json({success: true});
    } else {
        res.status(400).json({success: false, message: "L'image n'a pas été upload"});
    }
}

exports.getProducts = async (req, res) => {
    const products = await getProducts();
    res.status(200).json({success: true, data: products});
}