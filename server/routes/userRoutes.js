const express = require('express');
const router = express.Router();

const UserModel = require('../models/user');

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
router.get('/:id', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found!',
      });
    }
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(200).json({
      user,
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
