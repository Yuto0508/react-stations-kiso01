// @ts-check
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="CssComponent">
      <h1>掲示板</h1>
      <br></br>
      <header className="CssComponent2">
      <div className="submit">
      <Link to="/thread/new">スレッドを立てる</Link>
      {/* 他のコンポーネントと共に表示されるコンテンツ */}
      </div>
      <div className="cat">
        <img
          src="https://csshtml.work/wp-content/uploads/cat.jpg"
          width="200"
          alt="子猫"
        />
      </div>
    </header>
    </header>
  );
};
