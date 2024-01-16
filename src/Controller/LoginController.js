const authService = require('../Service/authService');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, userExists } = await authService.login(email, password);

    if (!userExists) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    if (token) {
      return res.status(200).json({ token });
    }

    return res.status(400).json({ message: 'Invalid fields' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = loginController;
