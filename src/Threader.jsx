// @ts-check
import React, { useState, useEffect } from "react";
// import { BreedsSelect } from './BreedsSelect'

// import {  } from './⇒<></>のフォーマット'

export const Threader = () => {
  const [Url, setUrl] = useState([]);
  const [selected, setSelected] = useState();

  const handleGet = (selected) => {
    setSelected(selected);
  };

  return (
    <header className="CssComponent2">
      <div className="submit">
        <a href="https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads">
          スレッドを立てる
        </a>
      </div>
    </header>
  );
};
