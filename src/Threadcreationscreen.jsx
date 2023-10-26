import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Threadcreationscreen = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const onChange = (a) => {
    setTitle(a.target.value);
  };

  async function OnclickButton(event) {
    const url =
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";
    const titleJson = {
      title: title,
    };
    console.log(titleJson);
    const fetchData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(titleJson),
    };
    // タイトルのバリデーションを行う関数
    const check = () => {
      if (title == "") {
        alert("スレッドタイトルを入力してください");
        event.preventDefault(); // フォームのデフォルトの送信を防ぐ
        return false;
        //文字が入っていない場合falseと表示。
      }
      return true;
      //文字が入っている場合trueと表示。
    };
    // APIリクエストを送信する非同期関数
    const api = async () => {
      console.log(title);
      const response = await fetch(url, fetchData);
      return response.text();
    };
    // 画面遷移を行う関数
    const move = () => {
      navigate("/");
    };
    // タイトルのバリデーションを実行し、結果を保存
    const isTitleValid = check();
    // タイトルが無効な場合は処理を中断
    if (isTitleValid) {
      (async () => {
        // 非同期処理を順次実行
        await api();
        move();
      })();
    }
  }

  return (
    // スレッドを作るフォーム
    <div className="OnclickButton">
      <h2> 新着スレッドの作成</h2>
      <div className="intitle">
        <label htmlFor="title">▼スレッドタイトルを入力してください。</label>
        <input id="title" type="text" onChange={onChange} />
      </div>
      <button onClick={OnclickButton}>スレッドを作る</button>
    </div>
  );
};
