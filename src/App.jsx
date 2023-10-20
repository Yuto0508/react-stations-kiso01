import logo from './logo.svg';
import { render } from '@testing-library/react'
import './App.css';
import React from 'react';

/**
 * @type {() => JSX.Element}
 */
import { Header } from './Header';
import { Threader } from './Threader';






export const App = () => {
  return (
    <>
    <Header />
    <Threader />
   
    <div className="App">
    <p> スレッド新規作成</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
