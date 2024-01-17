const userService = require('../Service/userService');

function validateDisplayName(displayName) {
  if (!displayName || displayName.length < 8) {
    return '"displayName" length must be at least 8 characters long';
  }
  return null;
}

function validateEmail(email) {
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return '"email" must be a valid email';
  }
  return null;
}

function validatePassword(password) {
  if (!password || password.length < 6) {
    return '"password" length must be at least 6 characters long';
  }
  return null;
}

function validateUserData({ displayName, email, password }) {
  return validateDisplayName(displayName)
         || validateEmail(email)
         || validatePassword(password);
}

async function createUser(req, res) {
  try {
    const validationError = validateUserData(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    const { displayName, email, password, image } = req.body;
    const result = await userService.createUser({ displayName, email, password, image });

    if (result.error === 'User already registered') {
      return res.status(409).json({ message: result.error });
    }

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { createUser };
