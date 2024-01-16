// src/services/authService.js
const jwt = require('jsonwebtoken');
const User = require('../models');

const login = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return { token: null, userExists: !!user };
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, userExists: true };
  } catch (error) {
    console.error('Error in authService:', error);
    throw new Error('Error processing login');
  }
};

module.exports = {
  login,
};
