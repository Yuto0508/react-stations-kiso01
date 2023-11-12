import React, { useState, useEffect } from "react";

export const ThreadList = () => {
  // ステートの初期化
  const [threads, setThreads] = useState([]); // スレッドのタイトルの配列

  // スレッドリストをAPIから取得する非同期関数
  async function getThreadList() {
    const url = "https://railway.bulletinboard.techtrain.dev/threads"; // APIエンドポイントのURL

    // GETリクエストを送信してデータを取得
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      console.log("APIリクエスト成功"); // 成功時のログ

      if (response.ok) {
        const threads = await response.json(); // レスポンスデータをJSON形式に変換

        // ステートにデータを設定
        setThreads(threads); // スレッドタイトルのステートを更新
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
  const newThreadList = threads.map((newThread, index) => (
    <li key={newThread.id}>{newThread.title}</li>
  ));

  return (
    <div className="createdThread">
      <h2>新着スレッド</h2>
      <ul className="newThreadList">{newThreadList}</ul>
    </div>
  );
};


