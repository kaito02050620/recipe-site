import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="sectionBoard w-full p-20 ">
      <div className="max-w-sm bg-white bg-opacity-80 rounded-sm shadow-md p-6 m-auto ">
        <h1 className="text-2xl text-center mb-5">ログイン</h1>
        <form className="">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-1">
              メールアドレス
            </label>
            <input
              className="block w-full p-2 border-gray-500 border-solid"
              type="email"
              name="email"
              id="email"
              placeholder="メールアドレス"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1">
              パスワード
            </label>
            <input
              className="block w-full p-2 border-gray-500 border-solid"
              type="password"
              name="password"
              id="password"
              placeholder="パスワード"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmationPassword" className="block mb-1">
              確認用パスワード
            </label>
            <input
              className="block w-full p-2 border-gray-500 border-solid"
              type="password"
              name="confirmationPassword"
              id="confirmationPassword"
              placeholder="確認用パスワード"
            />
          </div>
          <input
            type="submit"
            value="ログインする"
            className="block bg-red-300 bg-opacity-40 px-4 py-2 rounded-sm border-solid border-gray-800 border m-auto"
          />
        </form>
        <Link to="/register">
          <p className="text-blue-400 text-sm text-center mt-5 cursor-pointer">
            新規登録がまだの方はこちらから
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
