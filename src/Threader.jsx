import React, { useState, useEffect } from "react";

export const Threader = () => {
  const [threads, setThreads] = useState([]); // スレッドのデータを保持するステート

  // スレッドのデータをAPIから取得する非同期関数
  const fetchThreads = async () => {
    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/thread"
      );
      if (response.ok) {
        const data = await response.json();
        setThreads(data); // 取得したデータをステートに設定
      } else {
        console.error("APIリクエストが失敗しました");
      }
    } catch (error) {
      console.error("APIリクエスト中にエラーが発生しました", error);
    }
  };

  // ページが読み込まれた際にスレッドデータを取得
  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div>
      <h2>スレッド一覧</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>{thread.title}</li>
        ))}
      </ul>
    </div>
  );
};
