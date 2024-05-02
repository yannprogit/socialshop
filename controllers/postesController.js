//------------- Import -------------
const { addProduct } = require('../services/postesService.js');

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