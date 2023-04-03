const router = require("express").Router();
const Post = require("../models/Post");

//レシピを投稿
router.post("/", async (req, res) => {
  const newRecipe = new Post(req.body);
  try {
    const recipe = await newRecipe.save();
    return res.status(200).json(recipe);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//レシピを削除
router.delete("/:id", async (req, res) => {
  const recipe = await Post.findById(req.params.id);
  const currentUserId = req.body._id;
  console.log(recipe);
  try {
    if (recipeId.userId === currentUserId)
      return res.status(200).json("レシピを削除しました");
  } catch (error) {
    return res.status(500).json(error);
  }
});
//レシピを取得　状態管理しているIDとレシピUserIｄの一致確認

//レシピを更新
//レシピを全て取得
//特定のユーザーの投稿のみ取得
//特定レシピのカテゴリを全て取得
//特定レシピのカテゴリを取得

module.exports = router;
