// @ts-ignore
const { Category, User, BlogPost, PostCategory } = require('../models');

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
const updatePosts = async ({ title, content }, id, userId) => {
  const postInfo = { 
    title,
    content,
    updated: new Date(),
  };
  
  await BlogPost.update(postInfo, { where: { userId, id } });
  
  const post = await BlogPost.findOne({
    where: { userId, id },
    include: info,
  });
  
  const idExisti = await BlogPost.findOne({
    where: { userId },
  });
  
  if (idExisti !== userId) return { message: 'Unauthorized user' };
  
  return post;
};

module.exports = { updatePosts, info };
