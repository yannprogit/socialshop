//------------- Import -------------
const router = require('express').Router();
const likeController = require('../controllers/likesController');
const { authMiddleware } = require('../controllers/loginController');

//------------- Routes -------------
router.post('/like/:tag', authMiddleware, (req, res) => {
    likeController.addLike(req, res);
});

router.post('/dislike/:tag', authMiddleware, (req, res) => {
    likeController.delLike(req, res);
});

router.get('/product/:tag', likeController.getLikes);


module.exports = router;