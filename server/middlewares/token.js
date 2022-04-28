const jwt = require('jsonwebtoken');
require('dotenv').config();

const key = process.env.KEY || 'prathmeshsadakejwtsecret';
const generateToken = ({ id }) => jwt.sign({ id }, key, { expiresIn: '30d' });

module.exports = generateToken;
