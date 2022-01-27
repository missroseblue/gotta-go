const mongoose = require("mongoose");

const { Schema } = mongoose;
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

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
