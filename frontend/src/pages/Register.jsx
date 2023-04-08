import React from "react";

function Register() {
  return (
    <div className="sectionBoard w-full p-20 ">
      <div className="max-w-sm bg-white bg-opacity-80 rounded-sm shadow-md p-6 m-auto ">
        <h1 className="text-2xl text-center mb-5">新規登録</h1>
        <form className="">
          <div className="mb-6">
            <label htmlFor="username" className="block mb-1">
              ユーザー名
            </label>
            <input
              className="block w-full p-2 border-gray-500 border-solid"
              type="text"
              name="username"
              id="username"
              placeholder="ユーザー名"
            />
          </div>
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
            value="新規登録する"
            className="block bg-red-300 bg-opacity-40 px-4 py-2 rounded-sm border-solid border-gray-800 border m-auto"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
