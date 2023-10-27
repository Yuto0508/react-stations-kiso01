// @ts-check
import React, { useState } from "react";
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
        <a href="url">スレッドを立てる</a>
      </div>
      <div className="cat">
        <img
          src="https://csshtml.work/wp-content/uploads/cat.jpg"
          width="200"
          alt="子猫"
        />
      </div>
    </header>
  );
};
