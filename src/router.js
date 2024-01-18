const express = require('express');
const loginController = require('./Controller/LoginController');
const { createUser, getAllUsers, getUserById } = require('./Controller/UserControler');
const authMiddleware = require('./middleware/authMiddleware');
const { createCategory } = require('./Controller/CategoryController');
const { getAllCategories } = require('./Controller/CategoryController');
const BlogPostController = require('./Controller/BlogPostController');
const validate = require('./middleware/PostCategoriaMiddleware');

const router = express.Router();

router.post('/login', loginController);
router.post('/user', createUser);
router.use(authMiddleware);
router.get('/user', getAllUsers);
router.get('/user/:id', getUserById);
router.post('/categories', createCategory);
router.get('/categories', getAllCategories);
router.post('/post', validate, BlogPostController.createBlogPost);
router.get('/post', BlogPostController.getBlogPost);
router.get('/post/:id', BlogPostController.getPostId);
router.put('/post/:id', BlogPostController.updatepost);

module.exports = router;
