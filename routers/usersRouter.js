//------------- Import -------------
const router = require('express').Router();
const userController = require('../controllers/usersController');

//------------- Routes -------------
router.post('/', userController.addUser);

module.exports = router;
