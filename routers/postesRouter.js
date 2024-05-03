//------------- Import -------------
const router = require('express').Router();
const posteController = require('../controllers/postesController');
const { authMiddleware } = require('../controllers/loginController');
const multer = require('multer');
const upload = multer({ dest: '../images/' })

//------------- Routes -------------
router.post('/products', authMiddleware, (req, res) => {
    posteController.addProduct(req, res);
});

router.post('/products/images', authMiddleware, upload.single('image'), (req, res) => {
    posteController.addProductImages(req, res);
});

router.get('/products', posteController.getProducts);

module.exports = router;