import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { threadId } = useParams();
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");

  useEffect(() => {
    // スレッド内のメッセージを取得する関数
    async function fetchPosts() {
      try {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`);
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error("APIリクエストが失敗しました");
        }
      } catch (error) {
        console.error("APIリクエスト中にエラーが発生しました", error);
      }
    }

    fetchPosts();
  }, [threadId]);

  const handlePostMessage = async () => {
    // メッセージを投稿するための関数
    const newPostData = {
      content: newPostContent,
      // 他の必要なデータを追加
    };

    try {
      const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPostData),
      });

      if (response.ok) {
        const newPost = await response.json();
        setPosts([...posts, newPost]);
        setNewPostContent("");
      } else {
        console.error("メッセージの投稿に失敗しました");
      }
    } catch (error) {
      console.error("APIリクエスト中にエラーが発生しました", error);
    }
  };

  return (
    <div>
      <h2>投稿一覧</h2>
      <ul>
        {Object.values(posts).map((post, i) => (
          <li key={i}>
            <p>{post.content}</p>
            <p>投稿者: {post.author}</p>
            <p>投稿日時: {post.timestamp}</p>
          </li>
        ))}
      </ul>

      <div>
        <h3>新しいメッセージを投稿</h3>
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="投稿してください"
        />
        <button onClick={handlePostMessage}>投稿</button>
      </div>
    </div>
  );
};

export default Post;
