const mongoose = require("mongoose");

const { Schema } = mongoose;
const likeSchema = require('./Like');
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema(
  {
    restroom: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: "You need to leave a rating!",
      min: 0,
      max: 10,
    },
    postText: {
      type: String,
    },
    likes: [likeSchema],
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

postSchema.virtual('likeCount').get(function() {
  return this.likes.length;
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
