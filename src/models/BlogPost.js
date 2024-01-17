module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: { 
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      timestamps: false,
      underscored: true, 
      modelName: 'BlogPost',
      tableName: 'blog_posts', 
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'userId', 
        as: 'user', 
      });
    };
  
    return BlogPost;
  };
  