// @ts-ignore
const { User } = require('../models');
const generateToken = require('../helpers/tokenHelper');

const userService = {
  
  async userExists(email) {
    return User.findOne({ where: { email } });
  },

  async createUserInDB(userData) {
    return User.create({
      displayName: userData.displayName,
      email: userData.email,
      password: userData.password, 
      image: userData.image,
    });
  },

  async createUser(userData) {
    try {
      if (await this.userExists(userData.email)) {
        return { error: 'User already registered' };
      }

      const newUser = await this.createUserInDB(userData);

      if (!newUser) {
        return { error: 'Error creating user' };
      }

      const token = generateToken(newUser.id);

      return { token };
    } catch (error) {
      console.error('Error in createUser:', error);
      return { error: 'Internal server error' };
    }
  },

  async getAllUsers() {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] },
      });
      return users;
    } catch (error) {
      console.error('Error in getAllUsers:', error);
      return { error: 'Internal server error' };
    }
  },
};

module.exports = userService;
