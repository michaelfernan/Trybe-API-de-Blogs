const userService = require('../Service/userService');
const { validateUserData } = require('./validation'); // Importing validation functions

async function createUser(req, res) {
  try {
    const validationError = validateUserData(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    const { displayName, email, password, image } = req.body;
    const result = await userService.createUser({ displayName, email, password, image });

    if (result.error) {
      const statusCode = result.error === 'User already registered' ? 409 : 500;
      return res.status(statusCode).json({ message: result.error });
    }

    return res.status(201).json(result);
  } catch (error) {
    console.error(error); // Logging the error can be helpful for debugging
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { createUser, getAllUsers };