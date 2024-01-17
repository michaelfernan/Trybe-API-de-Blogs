const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const parts = authHeader.split(' ');

  let token;
  if (parts.length === 2 && /^Bearer$/i.test(parts[0])) {
    token = parts[1];
  } else {
    token = authHeader;
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    req.user = jwt.decode(token);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authMiddleware;
