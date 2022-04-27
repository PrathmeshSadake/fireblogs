const express = require('express');
const router = express.Router();

const BlogModel = require('../models/blog');

router.get('/', async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).json({
      status: 200,
      results: blogs,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
});
router.get('/:slug', async (req, res) => {
  try {
    const blogAritcle = await BlogModel.findOne({ slug: req.params.slug });
    if (!blogAritcle) {
      return res.status(404).json({
        message: 'Post not found!',
      });
    }
    res.status(200).json({
      article: blogAritcle,
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
    const blogAritcle = await BlogModel.create(req.body);
    res.status(200).json({
      article: blogAritcle,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
});
router.patch('/:slug', async (req, res) => {
  try {
    const blogAritcle = await BlogModel.findOneAndUpdate(
      {
        slug: req.params.slug,
      },
      { $set: req.body }
    );
    res.status(200).json({
      success: true,
      article: blogAritcle,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
});
router.delete('/:slug', async (req, res) => {
  try {
    const blogAritcle = await BlogModel.findOneAndDelete({
      slug: req.params.slug,
    });
    if (!blogAritcle) {
      return res.status(404).json({
        message: 'Post not found!',
      });
    }
    res.status(200).json({
      success: true,
      articleId: blogAritcle._id,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
});

module.exports = router;
