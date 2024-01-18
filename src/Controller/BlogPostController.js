const BlogPostService = require('../Service/BlogPostService');

exports.createBlogPost = async (req, res) => {
  try {
    const post = req.body;

    const { id } = req.user;
 
    const newPost = await BlogPostService.newPost(post, id);

    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBlogPost = async (req, res) => {
  try {
    const { id } = req.user;

    const newPost = await BlogPostService.getpost(id);
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPostId = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const result = await BlogPostService.getPostId(userId, id);
    if (result.message) return res.status(404).json(result);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.updatepost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const post = req.body;
    const result = await BlogPostService.updatePost(post, id, userId);
    if (result.message) return res.staus(401).json(result);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
