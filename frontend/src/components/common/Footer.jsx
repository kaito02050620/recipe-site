import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";
const PUBLIC_FOLDER = import.meta.env.VITE_API_PUBLIC_FOLDER;

const Footer = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutButton = (e) => {
    e.preventDefault();
    console.log("ss");
    localStorage.removeItem("takenoko_seafood_user");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <footer className="relative bg-yellow-800 bg-opacity-30  h-72 ">
        <div className="flex sm:justify-between sm:flex-row flex-col sm:items-stretch items-center max-w-screen-xl my-0 mx-auto lg:px-8 sm:px-6 px-3 lg:pt-8 sm:pt-6 pt-3">
          <div className="mb-4">
            <Link to="/" className="flex items-center">
              <div className="lg:w-28 md:w-20 sm:w-16 w-14 md:mr-3 mr-1">
                <img src={PUBLIC_FOLDER + "/logo.png"} alt="海の味ロゴ" />
              </div>
              <h2 className="lg:text-3xl sm:text-xl text-base font-bold  md:mr-3 mr-1">
                海の味
              </h2>
              <span className="lg:text-base sm:text-sm text-base  ">
                ~海鮮晩ご飯サイト~
              </span>
            </Link>
          </div>
          <nav>
            <ul className="sm:text-right text-center">
              <li className="mb-3 sm:text-xl text-base">
                <Link to="/siteDescription"> 海の味とは</Link>
              </li>
              <li className="mb-3 sm:text-xl text-base">
                <Link to="/developer">サイト開発者について</Link>
              </li>
              <li className="mb-3 sm:text-xl text-base">
                <Link to="/siteDescription">お問い合わせ＆意見箱</Link>
              </li>
              {user ? (
                <>
                  <li className="mb-3 sm:text-xl text-base">
                    <Link to={`/user/${user._id}`}>個人ページ</Link>
                  </li>
                  <li className="mb-3 sm:text-xl text-base">
                    <button onClick={(e) => logoutButton(e)}>ログアウト</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="mb-3 sm:text-xl text-base">
                    <Link to="/register">新規登録（無料）</Link>
                  </li>
                  <li className="mb-3 sm:text-xl text-base">
                    <Link to="/login">ログイン</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
        <small className="block absolute text-center w-full md:bottom-3 bottom-1">
          &copy;&nbsp;2023&nbsp;takenoko_presents_seafood
        </small>
      </footer>
    </>
  );
};

export default Footer;
