const router = require('express').Router();
const loginController = require('../controllers/loginController.js');

router.post('/', loginController.login);

module.exports = router;