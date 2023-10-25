import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Threadcreationscreen = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const onChange = (a) => {
    setTitle(a.target.value);
  };

  async function OnclickButton() {
    const url =
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";
    const titleJson = {
      title: title,
    };
    console.log(titleJson)
    const fetchData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(titleJson),
    };
    await new Promise(() => {
      if (title == "") {
        alert("スレッドタイトルを入力してください");
        return false;
      }
    });

    await new Promise(() => {
      console.log(title);
      fetch(url, fetchData).then((response) => response.text());
    });

    await new Promise(() => {
      navigate("/");
    });
  }

  return (
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