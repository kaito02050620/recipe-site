import React from "react";
import { Link } from "react-router-dom";
import { foodName } from "../select/select";

//配列取得　今の月を取得
const month = new Date().getMonth() + 1;
const [abstract, ...other] = foodName;
const randomNo = other.length - month * 2;
const theme = other[randomNo];

function MonthTheme() {
  return (
    <>
      <div className="sectionBoard ml-8 w-5/12 p-5">
        <h1 className="text-3xl mb-24">{`${month}月のお題`}</h1>
        <div className="w-full text-center">
          <p className="text-5xl mb-10">{theme}</p>
          <Link className="viewRecipeButton mb-5" to="/recipeInput">
            レシピを投稿する
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
          <p>お題の食材を使った料理をして投稿してみよう！</p>
        </div>
      </div>
    </>
  );
}

export default MonthTheme;
