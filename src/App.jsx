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

      <a href="http://localhost:3000/">Topに戻る</a>
    
    </>
  );
};

export default App;
