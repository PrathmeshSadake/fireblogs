const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const UserModel = require('../models/user');
const generateToken = require('../middlewares/token');

// router.get('/', async (req, res) => {
//   try {
//     const users = await UserModel.find();
//     res.status(200).json({
//       status: 200,
//       results: users,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: 500,
//       error: error.message,
//     });
//   }
// });
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await UserModel.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({
//         message: 'User not found!',
//       });
//     }
//     res.status(200).json({
//       user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: 500,
//       error: error.message,
//     });
//   }
// });

router.post('/', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: 'Post not found!',
      });
    }
    res.status(200).json({
      user: user._id,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
});

module.exports = router;
