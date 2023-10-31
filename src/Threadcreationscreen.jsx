import React, { useState } from "react";

export const Threadcreationscreen = () => {
  // ステートの初期化
  const [title, setTitle] = useState(""); // スレッドのタイトル
  const [isSubmitted, setIsSubmitted] = useState(false); // スレッドの作成が成功したかどうかのステート
  const [threads, setThreads] = useState([]); // スレッドリストの状態

  // 入力フォームの変更ハンドラ
  const onChange = (event) => {
    setTitle(event.target.value);
  };

  // フォームの送信ハンドラ
  const handleFormButton = async (event) => {
    event.preventDefault();

    // APIエンドポイント
    const url =
      "https://railway.bulletinboard.techtrain.dev/threads";
    const titleJson = {
      title: title,
    };

    // リクエストデータ
    const fetchData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(titleJson),
    };

    try {
      const response = await fetch(url, fetchData);

      if (response.ok) {
        // スレッドの作成に成功した場合
        const newThread = await response.json();
        setThreads([...threads, newThread]); // 新しいスレッドを追加
        setIsSubmitted(true); // スレッドの作成が成功したことを設定
        setTitle(""); // 入力フォームをクリア
      } else {
        console.log("APIリクエストが失敗しました");
      }
    } catch (error) {
      console.error("APIリクエスト中にエラーが発生しました", error);
    }
  };

  return (
    <div className="OnclickButton">
      <h2>新着スレッドの作成</h2>
      <form>
        <div className="intitle">
          <label htmlFor="title">▼スレッドタイトルを入力してください</label>
          <input id="title" type="text" value={title} onChange={onChange} />
        </div>

        <button type="button" onClick={handleFormButton}>
          スレッドを作る
        </button>
      </form>

      {threads.length > 0 && (
        <div className="ThreadList">
          <>
            {threads.map((thread, i) => (
              <li
                key={i}
                style={{
                  textAlign: "left",
                  fontSize: "16px",
                  lineHeight: "1.4",
                  margin: "8px 0",
                }}
              >
                {thread.title}
              </li>
            ))}
          </>
        </div>
      )}
    </div>
  );
};
