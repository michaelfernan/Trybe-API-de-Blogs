const express = require('express');
const loginController = require('./Controller/LoginController');
const { createUser, getAllUsers, getUserById } = require('./Controller/UserControler');
const authMiddleware = require('./middleware/authMiddleware');
const { createCategory } = require('./Controller/CategoryController');
const { getAllCategories } = require('./Controller/CategoryController');

const router = express.Router();

router.post('/login', loginController);

router.post('/user', createUser);
router.get('/user', authMiddleware, getAllUsers);
router.get('/user/:id', authMiddleware, getUserById);
router.post('/categories', authMiddleware, createCategory);
router.get('/categories', authMiddleware, getAllCategories);
module.exports = router;
