import React from "react";
import { Link } from "react-router-dom";
import seafoodImage from "../assets/image/seafood_sample.png";

function Home() {
  return (
    <>
      <section className="flex justify-between mb-10">
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
        <div className="sectionBoad ml-8 w-5/12 p-5">
          <h1 className="text-3xl mb-24">今月のお題</h1>
          <div className="w-full text-center">
            <p className="text-5xl mb-10">マグロ</p>
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
      </section>
      <div className="sectionBoard p-5">
        <h1 className="text-3xl mb-10">総合ランキング</h1>
        <div className="justify-center">
          <div className="flex items-center justify-center mb-10">
            <p className="text-6xl">第一位&nbsp;&nbsp;</p>
            <strong className="inline-block text-8xl mr-10">海鮮丼</strong>
            <div className="w-80">
              <img src={seafoodImage} alt="" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-10">
              <p className="text-6xl">第二位&nbsp;&nbsp;</p>
              <strong className="inline-block text-8xl mr-10">ムニエル</strong>
              <div className="w-80">
                <img src={seafoodImage} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-10">
              <p className="text-6xl">第三位&nbsp;&nbsp;</p>
              <strong className="inline-block text-8xl mr-10">煮つけ</strong>
              <div className="w-80">
                <img src={seafoodImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
