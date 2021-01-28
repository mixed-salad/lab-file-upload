const { Schema, model, Mongoose } = require('mongoose');

const postSchema = new Schema(
  {
    content: {
      type: String,
    },
    creatorId: {
      type: Mongoose.Types.ObjectId,
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

module.exports = model('Post', postSchema);
