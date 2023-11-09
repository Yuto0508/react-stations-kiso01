import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ThreadList = () => {
  // ステートの初期化
  const [thread, setThread] = useState([]); // スレッドのタイトルの配列
  // const [threadID] = useState([]); // スレッドのIDの配列 

  // スレッドリストをAPIから取得する非同期関数
  async function getThreadList() {
    const url =
      "https://railway.bulletinboard.techtrain.dev/threads"; // APIエンドポイントのURL

    // GETリクエストを送信してデータを取得
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      console.log("APIリクエスト成功"); // 成功時のログ

      if (response.ok) {
        const threads = await response.json(); // レスポンスデータをJSON形式に変換

        // ステートにデータを設定
        setThread(threads); // スレッドタイトルのステートを更新
      } else {
        console.error("APIリクエストが失敗しました"); // 失敗時のエラーログ
      }
    } catch (error) {
      console.error("APIリクエスト中にエラーが発生しました", error); // エラーハンドリング
    }
  }

  // コンポーネントがマウントされた時にスレッドリストを取得
  useEffect(() => {
    getThreadList();
  }, []);

  // スレッドリストを表示するJSX
  const newThreadList = thread.map((newThread, index) => (
    <li key={index}>{newThread.title}</li>
  ));

  return (
    <div className="createdThread">
      <h2>新着スレッド</h2>
      <ul className="newThreadList">
        {newThreadList}</ul>
    </div>
  );
};





    // setthread(threadArray); // スレッドタイトルのステートを更新
    // setthreadID(threadIDArray); // スレッドIDのステートを更新



    // レスポンスデータをJSON形式に変換
    //  const response = await response.json();

     // setthreadID(threadID); // スレッドIDのステートを更新→不要なため削除。

    //  // レスポンスからスレッドタイトルとIDを抽出し、一時的な配列に格納
    //  for (let i = 0; i < response.length; i++) {
    //   thread.push(response[i].title);
    //    threadID.push(response[i].id);
    // }
