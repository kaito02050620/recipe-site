import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-yellow-800 bg-opacity-30  h-72 ">
        <div className="flex justify-between max-w-screen-xl my-0 mx-auto px-8 pt-6">
          <div>
            <Link to="/">
              <div>Logo</div>
              <h2 className="text-xs">
                海鮮好きの晩御飯は絶対に悩ませないサイト
              </h2>
            </Link>
          </div>
          <nav>
            <ul className="text-right">
              <li className="mb-3">
                <Link className="" to="/siteDescription">
                  みんなの海鮮とは
                </Link>
              </li>
              <li className="mb-3">
                <Link className="" to="/">
                  新規登録（無料）
                </Link>
              </li>
              <li className="mb-3">
                <Link className="" to="/">
                  ログイン
                </Link>
              </li>
              <li className="mb-3">
                <Link className="" to="/developer">
                  サイト開発者について
                </Link>
              </li>
              <li className="">
                <Link className="" to="/">
                  お問い合わせ＆意見箱
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <small className="block absolute text-center w-full bottom-3">
          &copy;&nbsp;2023&nbsp;takenoko
        </small>
      </footer>
    </>
  );
};

export default Footer;
