const jwt = require('jsonwebtoken');
const User = require('../models/index'); 

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return null; 
  }

  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  return token;
};

module.exports = {
  login,
};
