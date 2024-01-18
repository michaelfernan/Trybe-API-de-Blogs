// @ts-ignore
const { Category, User, BlogPost } = require('../models');

const info = [
  {
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  },
  {
    model: Category,
    as: 'categories',
    through: { attributes: [] },
  },
];

// fiz a validação aqui mesmo por que to cansado
const validatePostForUpdate = async (id, userId) => {
  const post = await BlogPost.findOne({ where: { id } });
  
  if (!post) {
    return { status: 404, message: 'Post not found' };
  }
  
  if (post.userId !== userId) {
    return { status: 401, message: 'Unauthorized user' };
  }
  
  return { status: 200, post };
};
  
const updatePosts = async ({ title, content }, id, userId) => {
  if (!title || !content) {
    return { status: 400, message: 'Some required fields are missing' };
  }
  
  try {
    const validation = await validatePostForUpdate(id, userId);
    if (validation.status !== 200) {
      return validation;
    }
  
    await BlogPost.update({ title, content, updated: new Date() }, { where: { id, userId } });
  
    const updatedPost = await BlogPost.findOne({
      where: { id, userId },
      include: info,
    });
  
    return { status: 200, post: updatedPost };
  } catch (error) {
    console.error('Error updating post:', error);
    return { status: 500, message: 'Internal server error' };
  }
};

module.exports = { updatePosts, info };
