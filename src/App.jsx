import { render } from "@testing-library/react";
import "./App.css";

import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

/**
 * @type {() => JSX.Element}
 */
import { Header } from "./Header";
import { Threader } from "./Threader";
import { ThreadList } from "./ThreadList";
import { Threadcreationscreen } from "./Threadcreationscreen";

export const App = () => {
  return (
    <>
      <BrowserRouter basebame="/app">
        <Header />
        
          <ul>
            {/* <li>
              <Link to="/">ホーム</Link>
            </li> */}
            <li>
              <Link to="/thread/:thread_id">スレッド一覧</Link>
            </li>
          </ul>
        

        <Routes>
          <Route path="/" element={<ThreadList />} />
          {/* スレッド一覧画面(スレッド新着の画面) */}
          <Route path="/thread/:thread_id" element={<Threader />} />

          <Route path="/thread/new" element={<Threadcreationscreen />} />
          {/* 新規スレッド作成画面 */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
