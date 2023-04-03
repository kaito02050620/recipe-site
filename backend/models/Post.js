const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    people: {
      type: Number,
      required: true,
      default: 1,
    },
    seafood: {
      type: Array,
      required: true,
      default: [],
    },
    category: {
      type: Array,
      required: true,
      default: [],
    },
    foods: {
      type: [
        {
          No: {
            type: Number,
            required: true,
          },
          food: {
            type: String,
            required: true,
          },
          amount: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
    recipes: {
      type: [
        {
          No: {
            type: Number,
            required: true,
          },
          recipe: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
