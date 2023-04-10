import React from "react";
import { Link } from "react-router-dom";
import seafoodImage from "../../../public/assets/image/seafood_sample.png";

function Dinner() {
  return (
    <>
      <div className="sectionBoard w-3/5 p-5">
        <h1 className="text-3xl mb-10">今夜の晩御飯</h1>
        <div className="flex items-center justify-end">
          <div className="w-full text-center">
            <p className="text-5xl mb-8">海鮮丼</p>
            <Link className="viewRecipeButton" to="/recipeList">
              レシピを見る
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
          <div className="max-w-sm">
            <img src={seafoodImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dinner;
