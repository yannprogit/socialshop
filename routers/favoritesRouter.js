//------------- Import -------------
const router = require('express').Router();
const favoriteController = require('../controllers/favoritesController');
const { authMiddleware } = require('../controllers/loginController');

//------------- Routes -------------
router.post('favorite/products/:tag', authMiddleware, (req, res) => {
    favoriteController.addFavorite(req, res);
});

router.post('del-favorite/products/:tag', authMiddleware, (req, res) => {
    favoriteController.delFavorite(req, res);
});


module.exports = router;