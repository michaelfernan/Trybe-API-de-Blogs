const express = require('express');
const loginController = require('./Controller/LoginController');

const router = express.Router();

router.post('/login', loginController);

module.exports = router;
