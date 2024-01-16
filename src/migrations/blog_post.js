module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('blog_posts', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING
        },
        content: {
          type: Sequelize.TEXT
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users', 
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
        published: { 
          type: Sequelize.DATE,
          allowNull: true 
        },
        updated: { 
          type: Sequelize.DATE,
          allowNull: true
        }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('blog_posts');
    }
  };
  