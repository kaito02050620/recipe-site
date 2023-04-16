import React, { useContext, useEffect, useState } from "react";
import UserRecipe from "../components/edit/UserRecipe";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../state/AuthContext";
const API_SERVER = import.meta.env.VITE_API_SERVER;

function User() {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState(null);
  const navigate = useNavigate();

  //ユーザーが投稿したレシピを取得
  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get(
        API_SERVER + "/posts/private/" + user._id
      );
      setRecipes(response.data);
    };
    getRecipes();
  }, []);

  // const deleteUserButton = async (e) => {
  //   e.preventDefault();
  //   await axios.delete(API_SERVER + "/users/" + TEST_USER);
  //   alert("正常に退会て、投稿したデータを削除しました");
  //   navigate("/login");
  // };

  return (
    <div className="sectionBoard py-16 px-2">
      <h1 className="text-3xl text-center mb-16">{`個人ページ（${user.username}）`}</h1>
      <Link to="/create">レシピを投稿する</Link>
      <div className="max-w-3xl bg-white bg-opacity-80 rounded-sm shadow-md p-10 m-auto">
        <div className="w-full flex border-b border-current pb-2">
          <p className="w-3/5 text-xl text-center">レシピ名</p>
          <p className="w-1/5 text-xl text-center">投稿日</p>
        </div>
        <ul className="mt-5">
          {recipes === null ? (
            <p>投稿がありません。</p>
          ) : (
            recipes.map((recipe) => {
              return <UserRecipe key={recipe._id} {...recipe} />;
            })
          )}
        </ul>
      </div>
      <button
        onClick={(e) => deleteUserButton(e)}
        className="bg-red-300 bg-opacity-40 px-4 py-2 rounded-sm border-solid border-gray-800 border block mx-auto mt-10"
      >
        退会する
      </button>
    </div>
  );
}

export default User;
