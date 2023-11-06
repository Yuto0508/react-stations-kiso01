// // PostList.js

// import React, { useState, useEffect } from "react";

// const PostList = ({ threadId }) => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // 特定のスレッド内の投稿を取得するためのAPI呼び出し
//     async function getPostsInThread() {
//       const url = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`;
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         setPosts(data);
//       } else {
//         console.error("APIリクエストが失敗しました");
//       }
//     }
//     getPostsInThread();
//   }, [threadId]);

//   return (
//     <div className="Postlist">
//       <h2>投稿一覧</h2>
//       <ul>
//         {posts.map((post, i) => (
//           <li key={i}>
//             <p>{post.content}</p>
//             <p>投稿者: {post.author}</p>
//             <p>投稿日時: {post.timestamp}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default PostList;