const router = require('express').Router();
const userControllers = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.get('/search', auth, userControllers.searchUser);

module.exports = router;
