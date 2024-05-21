//------------- Import -------------
const router = require('express').Router();
const posteController = require('../controllers/postesController');
const { authMiddleware } = require('../controllers/loginController');
const multer = require('multer');
const upload = multer({ dest: '../images/' }).array('images', 8);

//------------- Routes -------------
router.post('/products', authMiddleware, (req, res) => {
    posteController.addProduct(req, res);
});

router.post('/products/images', authMiddleware, upload, (req, res) => {
    posteController.addProductImages(req, res);
});

router.delete('/products/:tag', authMiddleware, (req, res) => {
    posteController.delProduct(req, res, req.user.idUser);
});

router.get('/products', posteController.getProducts);

router.get('/products/:tag', posteController.getProduct);

router.get('/products/:tag/stocks', posteController.getStocks);

module.exports = router;