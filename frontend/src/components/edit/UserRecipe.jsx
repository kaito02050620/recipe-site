import React from "react";
import seafoodImage from "../../../public/assets/image/seafood_sample.png";

function UserRecipe() {
  return (
    <li className="md:flex flex-wrap w-full p-2 mb-2 items-center bg-orange-200">
      <div className="sm:w-3/5 sm:flex items-center justify-between">
        <p className="mr-10">ちりめんたっぷり海鮮丼 ~大トロを添えて~</p>
        <img src={seafoodImage} alt="" className="h-24 object-cover" />
      </div>
      <div className="w-1/5">
        <p className="w-full text-center">2000/12/30</p>
      </div>
      <div className="w-1/5">
        <button className="bg-green-300 bg-opacity-40 rounded-sm border-solid border-gray-800 border inline-block w-12 h-10 mr-2">
          編集
        </button>
        <button className="bg-red-300 bg-opacity-40 rounded-sm border-solid border-gray-800 border inline-block w-12 h-10">
          削除
        </button>
      </div>
    </li>
  );
}

export default UserRecipe;
