import { render } from "@testing-library/react";
import "./App.css";
import React from "react";

/**
 * @type {() => JSX.Element}
 */
import { Header } from "./Header";
import { Threader } from "./Threader";
import { ThreadList } from "./ThreadList";

export const App = () => {
  return (
    <>
      <Header />
      <Threader />
      <ThreadList />

      <div className="Top">
        <a href="https://www.google.com/webhp">Topに戻る</a>
      </div>
    </>
  );
};

export default App;
