import React, { useState, useEffect } from "react";

const NewThreads = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // 実際のAPIリクエストを行う部分
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((response) => response.json())
      .then((data) => {
        // APIから取得したデータをセット
        setThreads(data);
      })
      .catch((error) => {
        console.error("APIリクエストが失敗しました:", error);
        // エラーハンドリングのコードを追加
      });
  }, []);

  return (
    <div>
      <h1>新着スレッド</h1>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <a href={`/threads/${thread.id}`}>{thread.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewThreads;
