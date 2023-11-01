import { render } from "@testing-library/react";
import "./App.css";
import React from "react";
import { Link } from 'react-router-dom';

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
          <Link to="/">ホームに戻る</Link>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
