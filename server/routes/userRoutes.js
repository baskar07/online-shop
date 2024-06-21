const express = require('express');
const { signup, login, getUserDetails, handleRefreshToken } = require('../controllers/userControllers');
const { isAuthenticated } = require('../middleware/auth');

const router = express.Router();


router.route('/signup').post(signup);
router.route('/login').post(login);

router.route('/profile').get(isAuthenticated, getUserDetails);
router.route('/refresh').get(handleRefreshToken);


module.exports = router;

