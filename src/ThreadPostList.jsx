import React, { useState, useEffect } from "react";

export const PostList = ({ threadId }) => {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const url = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`;

    const response = await fetch(url, {
      method: "GET",
    });

    if (response.ok) {
      const postData = await response.json();
      setPosts(postData);
    } else {
      console.log("APIリクエストが失敗しました");
    }
  }

  useEffect(() => {
    getPosts();
  }, [threadId]);

  return (
    <div className="postList">
      <h2>投稿一覧</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <strong>{post.author}:</strong> {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};
