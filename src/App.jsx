import { render } from "@testing-library/react";
import "./App.css";
import React from "react";

/**
 * @type {() => JSX.Element}
 */
import { Header } from "./Header";
import { Threader } from "./Threader";
import { ThreadList } from "./ThreadList";
import { Threadcreationscreen } from "./Threadcreationscreen";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Threader />
        <Threadcreationscreen />
        <ThreadList />
        <div className="Home">
          <a href="https://www.google.com/webhp">ホームに戻る</a>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
