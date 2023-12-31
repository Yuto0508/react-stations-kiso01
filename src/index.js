import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App";
import reportWebVitals from "./reportWebVitals";
import { ThreadList } from "./ThreadList";
import { Threadcreationscreen } from "./Threadcreationscreen";
import Post from "./Post";
import {  Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basebame="/app">
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList />} />
        {/* スレッド一覧画面(スレッド新着の画面) */}

        <Route path="thread/new" element={<Threadcreationscreen />} />
        {/* 新規スレッド作成画面 */}

        <Route path="thread/:thread_id" element={<Post />} />
        {/* 特定のスレッドの詳細情報を表示し、新しいコメントを投稿するための機能 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

async function callApi() {
  const res = await fetch(
    "https://railway.bulletinboard.techtrain.dev/threads"
  );
  const users = await res.json();
  console.log(users);
}

// "https://railway.bulletinboard.techtrain.dev/threads/${id}/posts"

reportWebVitals();
callApi();
