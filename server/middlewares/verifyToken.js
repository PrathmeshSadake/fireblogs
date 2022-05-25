const jwt = require('jsonwebtoken');
require('dotenv').config();

const key = process.env.KEY || 'prathmeshsadakejwtsecret';
const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, key);
    req.userData = {
      userId: decodedToken.userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Auth failed!' });
  }
};

module.exports = verifyToken;
