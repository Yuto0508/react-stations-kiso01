import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Threadcreationscreen = () => {
  // ステートの初期化
  const [title, setTitle] = useState(""); // スレッドのタイトル
 
  
  const navigate = useNavigate(); // useNavigate フックを使用して画面遷移を行うための関数を取得

  // 入力フォームの変更ハンドラ
  const onChange = (event) => {
    setTitle(event.target.value);
  };

  // フォームの送信ハンドラ
  const handleFormButton = async (event) => {
    event.preventDefault();
    if (title.trim().length < 3) {
      // タイトルが3文字未満の場合、画面遷移を行わない
      alert("スレッドタイトルは3文字以上必要です。");
      return;
    }

    // APIエンドポイント
    const url = "https://railway.bulletinboard.techtrain.dev/threads";
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
    console.log(titleJson);

    try {
      const response = await fetch(url, fetchData);
      console.log("1");

      if (response.ok) {
        // スレッドの作成に成功した場合

        navigate("/"); // "/" は遷移先のパスに置き換えてください
        console.log("2");
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
          <input
            id="title"
            type="text"
            placeholder="スレッドタイトルを入力"
            value={title}
            onChange={onChange}
          />
        </div>

        <button type="button" onClick={handleFormButton}>
          スレッド作成
        </button>

        <br></br>
        <button type="button" onClick={() => navigate("/")}>
          Topに戻る
        </button>
      </form>
    </div>
  );
};

export default Threadcreationscreen;