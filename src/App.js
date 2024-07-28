import React from 'react';

import './App.css';
import fig from './images/fig.jpg';

function App() {
  return (
    <div className="App">
      <h1>ページタイトル</h1>
      <p>
        こんにちは！
        <a href="https://www.ktc.ac.jp">近大高専のwebページ</a>もみてね
      </p>
      <div>
        <img src={fig} alt="サンプル画像" />
      </div>

      <div>
        <h2>このページについて</h2>
        <p>
          このページは、Reactで作ったページです。<br />
          練習用に作成しました。
        </p>
      </div>

      <div>
        <h2>開発方法</h2>
        <p>
          create-react-appで作成しました。<br />
          App.jsを編集して、npm startで確認しています。
        </p>
      </div>
    </div>
  );
}

export default App;