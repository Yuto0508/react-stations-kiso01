import React, { useState, useEffect } from "react";

export const ThreadList = () => {
  // ステートの初期化
  const [thread, setthread] = useState([]); // スレッドのタイトルの配列
  const [threadID, setthreadID] = useState([]); // スレッドのIDの配列
  // let threadArray = []; // スレッドタイトルを一時的に格納する配列
  // let threadIDArray = []; // スレッドIDを一時的に格納する配列

  // スレッドリストをAPIから取得する非同期関数
  async function getThreadList() {
    const url =
      "https://railway.bulletinboard.techtrain.dev/threads"; // APIエンドポイントのURL

    // GETリクエストを送信してデータを取得
    const getData = await fetch(url, {
      method: "GET",
    });
    console.log("○")

    // レスポンスデータをJSON形式に変換
    const response = await getData.json();

    // // レスポンスからスレッドタイトルとIDを抽出し、一時的な配列に格納
    // for (let i = 0; i < response.length; i++) {
    //   threadArray.push(response[i].title);
    //   threadIDArray.push(response[i].id);
    // }

    // ステートにデータを設定
    setthread(); // スレッドタイトルのステートを更新
    setthreadID(); // スレッドIDのステートを更新

    // setthread(threadArray); // スレッドタイトルのステートを更新
    // setthreadID(threadIDArray); // スレッドIDのステートを更新
  }

  // コンポーネントがマウントされた時にスレッドリストを取得
  useEffect(() => {
    getThreadList();
  }, []);

  // スレッドリストを表示するJSX
  const newThreadList = thread.map((newThread, index) => {
    return (
      <li key={index} value={newThread}>
        {newThread}
      </li>
    );
  });

  return (
    <div className="createdThread">
      <ul className="newThreadList">{newThreadList}</ul>
    </div>
  );
};
