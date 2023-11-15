import React from "react";
import { Link } from "react-router-dom";
import { ThreadList } from "./ThreadList";

const Home = () => {
  // 仮想的なスレッド一覧データ
  

  return (
    <div>
      <h2>スレッド一覧</h2>
      <ThreadList />
    </div>
  );
};

export default Home;
