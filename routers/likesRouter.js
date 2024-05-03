//------------- Import -------------
const router = require('express').Router();
const likeController = require('../controllers/likesController');
const { authMiddleware } = require('../controllers/loginController');

//------------- Routes -------------
router.post('like/products/:tag', authMiddleware, (req, res) => {
    likeController.addLike(req, res);
});

router.post('dislike/products/:tag', authMiddleware, (req, res) => {
    likeController.delLike(req, res);
});


module.exports = router;