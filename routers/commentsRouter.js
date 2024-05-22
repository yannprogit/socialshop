//------------- Import -------------
const router = require('express').Router();
const commentController = require('../controllers/commentsController');
const { authMiddleware } = require('../controllers/loginController');

//------------- Routes -------------
router.post('/', authMiddleware, (req, res) => {
    commentController.addComment(req, res);
});

router.put('/:id', authMiddleware, (req, res) => {
    commentController.updComment(req, res);
});

router.delete('/:id', authMiddleware, (req, res) => {
    commentController.delComment(req, res);
});

router.get('/:id', authMiddleware, (req, res) => {
    commentController.getComment(req, res);
});

router.get('/postes/:id', authMiddleware, (req, res) => {
    commentController.getComments(req, res);
});


module.exports = router;