const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const UserController = require('../controllers/User.controller');

router.post('/signup', UserController.apiCreateUser);
router.post('/signin', UserController.apiSignInUser);
router.post('/updateusername', UserController.apiUpdateUsername);
router.post('/updatepassword', UserController.apiUpdatePassword);
router.delete('/deleteuser', UserController.apiDeleteUser);
router.get('/auth', auth, UserController.apiGetAuth);

module.exports = router;