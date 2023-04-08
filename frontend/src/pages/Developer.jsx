import React from "react";
import takenokoImage from "../assets/image/takenoko.png";

const Developer = () => {
  return (
    <div className="sectionBoard py-16">
      <h1 className="text-3xl text-center mb-16">サイト開発者について</h1>
      <div className="flex justify-center">
        <div>
          <div className="w-80 h-70 shadow-xl">
            <img src={takenokoImage} alt="ﾀｹﾉｺ画像" />
          </div>
        </div>
        <div className="w-80 ml-24">
          <ul>
            <li className="mb-4">
              <p className="inline-block">名前&nbsp;&#058;&nbsp;&nbsp;</p>
              <p className="inline-block">ﾀｹﾉｺ</p>
            </li>
            <li className="mb-4">
              <p className="inline-block">出身地&nbsp;&#058;&nbsp;&nbsp;</p>
              <p className="inline-block">岩手県</p>
            </li>
            <li className="mb-4">
              <p className="inline-block">学歴&nbsp;&#058;&nbsp;&nbsp;</p>
              <p className="inline-block">工業高校出身</p>
            </li>
            <li className="mb-4">
              <p className="inline-block">コメント&nbsp;&#058;&nbsp;&nbsp;</p>
              <p className="inline-block leading-loose">
                本サイトに足を運んでいただき有難うございます。ワクワクな開発をモットーに面白そう！と思ったものを生み出し続けます。社内SEの影響より、IT開発者になる事を決意して日々学習してます。もしここ改善してほしい、こんな機能が欲しい等ありましたら意見お待ちしております。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Developer;
