const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//ユーザー削除
router.delete("/:id", async (req, res) => {
  const user = await User.findById({ _id: req.params.id });
  const { id, password } = req.body;
  const compared = await bcrypt.compare(password, user.password);
  try {
    if (user.id === id && compared) {
      await User.deleteOne({ _id: id });
      await Post.deleteMany({ userId: id });
      return res
        .status(200)
        .json("ユーザー情報、これまでの投稿を削除しました。");
    } else {
      return res.status(400).json("パスワードとユーザー情報が一致しません");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
