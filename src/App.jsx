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
        <nav>
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/threader">スレッド一覧</Link>
            </li>
            <li>
              <Link to="/TreadList">スレッド一覧</Link>
            </li>
          </ul>
          </nav>

          <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Thread" element={<Threader />} />
          <Route path="/ThreadList " element={<ThreadList  />} />

         

          <Route path="/thread/new" element={<Threadcreationscreen />} />
          {/* 新規スレッド作成画面 */}
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
