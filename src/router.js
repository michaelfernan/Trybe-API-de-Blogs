const express = require('express');
const loginController = require('./Controller/LoginController');
const { createUser, getAllUsers } = require('./Controller/UserControler');
const authMiddleware = require('./middleware/authMiddleware');

const router = express.Router();

router.post('/login', loginController);

router.post('/user', createUser);
router.get('/user', authMiddleware, getAllUsers);
module.exports = router;
