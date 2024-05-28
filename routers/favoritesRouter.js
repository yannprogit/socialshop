//------------- Import -------------
const router = require('express').Router();
const favoriteController = require('../controllers/favoritesController');
const { authMiddleware } = require('../controllers/loginController');

//------------- Routes -------------
router.post('/add/:tag', authMiddleware, favoriteController.addFavorite);
router.post('/del/:tag', authMiddleware, favoriteController.delFavorite);
router.get('/get/:tag', authMiddleware, favoriteController.getFavorite);


module.exports = router;