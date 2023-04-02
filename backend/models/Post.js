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
      max: 300,
    },
    image: {
      type: String,
    },
    people: {
      type: Number,
      required: true,
    },
    seafood: {
      type: Array,
      required: true,
    },
    category: {
      type: Array,
      required: true,
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

module.exports = mongoose.model("Post", PostSchema);
