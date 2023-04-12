import axios from "axios";
import React, { useEffect } from "react";
const API_SERVER = import.meta.env.VITE_API_SERVER;
const TEST_USER = import.meta.env.VITE_TEST_USER;

function UserRecipe({ ...recipe }) {
  //日付変換
  const date = new Date(recipe.updatedAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const newUpdatedAt = `${year}/${month}/${day}`;

  const deleteButton = async () => {
    await axios.delete(API_SERVER + "/posts/" + recipe._id, {
      data: {
        id: TEST_USER,
      },
    });
  };

  return (
    <li className="md:flex flex-wrap w-full p-2 mb-2 items-center bg-orange-200">
      <div className="sm:w-3/5 sm:flex items-center justify-between">
        <p className="mr-10">{recipe.title}</p>
        <img src={recipe.image} alt="" className="h-24 object-cover" />
      </div>
      <div className="w-1/5">
        <p className="w-full text-center">{newUpdatedAt}</p>
      </div>
      <div className="w-1/5">
        <button className="bg-green-300 bg-opacity-40 rounded-sm border-solid border-gray-800 border inline-block w-12 h-10 mr-2">
          編集
        </button>
        <button
          className="bg-red-300 bg-opacity-40 rounded-sm border-solid border-gray-800 border inline-block w-12 h-10"
          onClick={deleteButton}
        >
          削除
        </button>
      </div>
    </li>
  );
}

export default UserRecipe;
