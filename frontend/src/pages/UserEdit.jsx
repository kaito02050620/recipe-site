import React, { useEffect, useState } from "react";
import UserRecipe from "../components/edit/UserRecipe";
import axios from "axios";
import { Link } from "react-router-dom";
const API_SERVER = import.meta.env.VITE_API_SERVER;
const TEST_USER = import.meta.env.VITE_TEST_USER;

function User() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get(
        API_SERVER + "/posts/private/" + TEST_USER
      );
      setRecipes(response.data);
    };
    getRecipes();
  }, [recipes]);

  return (
    <div className="sectionBoard py-16 px-2">
      <h1 className="text-3xl text-center mb-16">個人ページ（ﾀｹﾉｺ）</h1>
      <Link to="/recipeInput">レシピを投稿する</Link>
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
      <button className="bg-red-300 bg-opacity-40 px-4 py-2 rounded-sm border-solid border-gray-800 border block mx-auto mt-10">
        退会
      </button>
    </div>
  );
}

export default User;
