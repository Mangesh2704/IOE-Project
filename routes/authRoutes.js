const express = require('express');
const router= express.Router();
const authController = require('../controllers/authController')

// router.route('/').get(authController.home)
router.route('/register').get(authController.register);
router.route('/login').get(authController.login)

router.route('/insert').post(authController.insert)


module.exports = router;
