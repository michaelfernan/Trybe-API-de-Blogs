const authService = require('../Service/authService');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  try {
    const token = await authService.login(email, password);

    if (!token) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = loginController;
