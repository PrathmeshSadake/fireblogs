const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
//Initialize
mongoose.plugin(slug);

const BlogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    content: {
      type: String,
    },
    createdBy: {
      type: String,
      required: true,
    },
    //Define the slug parameters
    slug: { type: String, slug: 'title', unique: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model('blog', BlogSchema);
module.exports = Blog;
