const jwt = require('jsonwebtoken');

const getTokenFromHeader = (authHeader) => {
  if (!authHeader) return null;

  const parts = authHeader.split(' ');
  if (parts.length === 2 && /^Bearer$/i.test(parts[0])) {
    return parts[1];
  }

  return authHeader;
};

const verifyToken = (token) => {
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return jwt.decode(token);
  } catch (error) {
    return null;
  }
};

const authMiddleware = (req, res, next) => {
  const token = getTokenFromHeader(req.headers.authorization);

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const user = verifyToken(token);
  if (!user) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  req.user = user;
  next();
};

module.exports = authMiddleware;
