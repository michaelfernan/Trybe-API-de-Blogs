const express = require('express');
const loginController = require('./Controller/LoginController');
const { createUser } = require('./Controller/UserControler');

const router = express.Router();

router.post('/login', loginController);

router.post('/user', createUser);
module.exports = router;
