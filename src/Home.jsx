import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // 仮想的なスレッド一覧データ
  const threads = [
    { id: 1, title: "Thread 1" },
    { id: 2, title: "Thread 2" },
    { id: 3, title: "Thread 3" },
    { id: 4, title: "Thread 4" },
    { id: 5, title: "Thread 5" },
    { id: 6, title: "Thread 6" },
    { id: 7, title: "Thread 7" },
    { id: 8, title: "Thread 8" },
    { id: 9, title: "Thread 9" },
    { id: 10, title: "Thread10" },
    // 他にもスレッドがあれば追加
  ];

  return (
    <div>
      <h2>スレッド一覧</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <Link to={`/thread/${thread.id}`}>{thread.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
