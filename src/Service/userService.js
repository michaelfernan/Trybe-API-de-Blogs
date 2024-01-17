// @ts-ignore
const { User } = require('../models');
const generateToken = require('../helpers/tokenHelper');

const userService = {
  userExists(email) {
    return User.findOne({ where: { email } });
  },

  createUserInDB(userData) {
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
      console.error(error);
      return { error: 'Internal server error' };
    }
  },
};

module.exports = userService;
