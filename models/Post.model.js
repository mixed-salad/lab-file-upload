const mongoose = require('mongoose');
const { post } = require('../app');

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    creatorId: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    picPath: {
      type: String
    },
    picName: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
