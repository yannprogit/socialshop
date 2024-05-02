//------------- Import -------------
const router = require('express').Router();
const posteController = require('../controllers/postesController');
const { authMiddleware } = require('../controllers/loginController');

//------------- Routes -------------
router.post('/products', authMiddleware, (req, res) => {
    posteController.addProduct(req, res);
});

module.exports = router;