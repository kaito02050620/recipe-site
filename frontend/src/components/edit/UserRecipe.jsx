import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";
const API_SERVER = import.meta.env.VITE_API_SERVER;
const PUBLIC_FOLDER = import.meta.env.VITE_API_PUBLIC_FOLDER;

function UserRecipe({ ...recipe }) {
  const { user } = useContext(AuthContext);

  //指定文字数を超える場合に「...」を表示させる
  function truncateText(text) {
    const MAX_LENGTH = 25;
    if (text.length > MAX_LENGTH) {
      return text.substring(0, MAX_LENGTH) + "...";
    } else {
      return text;
    }
  }

  //日付変換
  const date = new Date(recipe.updatedAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const newUpdatedAt = `${year}/${month}/${day}`;

  //投稿を削除するボタン
  const deleteButton = async () => {
    await axios.delete(API_SERVER + "/posts/" + recipe._id, {
      data: {
        id: user._id,
      },
    });
  };

  return (
    <li className="md:flex w-full p-4 mb-2 items-center bg-orange-200">
      <div className="md:w-3/5 md:flex items-center justify-between">
        <p className="w-full mr-10 md:mb-0 sm:mb-3 mb-2 md:text-left text-center md:text-lg text-base">
          {truncateText(recipe.title)}
        </p>
        <div className="md:w-60 sm:w-72 w-52 object-cover m-auto md:mb-0 sm:mb-3 mb-2">
          <img src={PUBLIC_FOLDER + "/" + recipe.image} alt={recipe.title} />
        </div>
      </div>
      <div className="md:w-1/5 w-full">
        <div className=" m-auto md:mb-0 sm:mb-3 mb-2">
          <p className="w-full text-center">{newUpdatedAt}</p>
        </div>
      </div>
      <div className="md:w-1/5 w-full flex justify-center">
        <Link to={`/edit/${recipe._id}`} className="mr-2">
          <button className="bg-green-300 bg-opacity-40 rounded-sm border-solid border-gray-800 border inline-block w-12 h-10">
            編集
          </button>
        </Link>
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
