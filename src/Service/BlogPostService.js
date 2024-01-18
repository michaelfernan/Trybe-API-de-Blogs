// @ts-ignore
const { BlogPost, PostCategory, Category } = require('../models');
const { info, updatePosts } = require('./info');

const newPost = async ({ content, categoryIds, title }, userId) => {
  try {
    const catExist = await Category.findAll({ where: { id: categoryIds } });
    const postInfo = { 
      title,
      content,
      userId, 
      published: new Date(), 
      updated: new Date(),
    };
    const post = await BlogPost.create(postInfo);
    const categories = catExist.map((cat) => ({ postId: post.id,
      categoryId: cat.id,
    }));

    await PostCategory.bulkCreate(categories);
    return post;
  } catch (error) {
    throw new Error(`Error in newPost: ${error.message}`);
  }
};

const getpost = async (userId) => {
  try {
    const posts = await BlogPost.findAll({
      where: { userId },
      include: info,
    });
    return posts;
  } catch (error) {
    throw new Error(`Error in getpost: ${error.message}`);
  }
};

const getPostId = async (userId, id) => {
  const post = await BlogPost.findOne({
    where: { userId, id },
    include: info,
  });
  if (!post) return { message: 'Post does not exist' };
  return post;
};

const updatePost = ({ title, content }, id, userId) => updatePosts({ title, content }, id, userId);

module.exports = { newPost, getpost, getPostId, updatePost };
