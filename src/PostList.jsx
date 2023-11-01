// import React, { useState, useEffect } from "react";
// import { PostList } from "./PostList"; // PostList コンポーネントをインポート

// export const ThreadList = () => {
//   const [threads, setThreads] = useState([]);
//   const [selectedThread, setSelectedThread] = useState(null); // 選択されたスレッドの情報を管理

//   // スレッド一覧を取得するAPI呼び出し（省略）

//   return (
//     <div className="ThreadList">
//       <h2>スレッド一覧</h2>
//       <ul>
//         {threads.map((thread) => (
//           <li key={thread.id} onClick={() => setSelectedThread(thread)}>
//             {thread.title}
//           </li>
//         ))}
//       </ul>

//       {/* PostList コンポーネントを表示 */}
//       {selectedThread && (
//         <PostList threadId={selectedThread.id} />
//       )}
//     </div>
//   );
// };
