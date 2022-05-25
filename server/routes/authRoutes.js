const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const UserModel = require('../models/user');
const generateToken = require('../middlewares/token');
const verifyToken = require('../middlewares/verifyToken');

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, async (err, hash) => {
        const user = await UserModel.create({ name, email, password: hash });
        const token = generateToken(user._id);
        res.status(200).json({
          name: user.name,
          email: user.email,
          token,
        });
      });
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
});
router.post('/login', verifyToken, async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await UserModel.findById(userId);
    res.status(200).json({ user });
  } catch (error) {
    res.status(403).json({
      status: 403,
      error: error.message,
    });
  }
});

module.exports = router;
