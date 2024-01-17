module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    }, {
      timestamps: false,
      underscored: true,
      modelName: 'PostCategory',
      tableName: 'post_categories', 
    });
  
    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
          as: 'blog_posts_e_category',
          foreignKey: 'category_e_id',
          through: PostCategory,
          otherKey: 'post_e_id',
        });
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories_e_post',
          foreignKey: 'post_e_id',
          through: PostCategory,
          otherKey: 'category_e_id',
        });
      };
  
  
    return PostCategory;
  };
  