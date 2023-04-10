import React from "react";
import UserRecipe from "../components/edit/UserRecipe";

function User() {
  return (
    <div className="sectionBoard py-16 px-2">
      <h1 className="text-3xl text-center mb-16">個人ページ（ﾀｹﾉｺ）</h1>
      <div className="max-w-3xl bg-white bg-opacity-80 rounded-sm shadow-md p-10 m-auto">
        <div className="w-full flex border-b border-current pb-2">
          <p className="w-3/5 text-xl text-center">レシピ名</p>
          <p className="w-1/5 text-xl text-center">投稿日</p>
        </div>
        <ul className="mt-5">
          <UserRecipe />
        </ul>
      </div>
      <button className="bg-red-300 bg-opacity-40 px-4 py-2 rounded-sm border-solid border-gray-800 border block mx-auto mt-10">
        退会
      </button>
    </div>
  );
}

export default User;
