import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between max-w-screen-xl my-0 mx-auto py-6 px-8">
      <div>
        <Link to="/" className="flex items-center">
          <div>Logo　</div>
          <h2>海鮮好きの晩御飯は絶対に悩ませないサイト</h2>
        </Link>
      </div>
      <nav>
        <ul className="flex">
          <li className="text-yellow-600 -ml-12 text-xl">
            <Link className="" to="/sitedescription">
              みんなの海鮮とは
            </Link>
          </li>
          <li className="ml-12 text-xl">
            <Link className="" to="/">
              新規登録（無料）
            </Link>
          </li>
          <li className="ml-9 text-xl">
            <Link className="" to="/">
              ログイン
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
