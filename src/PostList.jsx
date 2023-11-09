import React, { useState } from "react";

const PostList = ({ threadId, onMessagePosted }) => {
  const [newPostContent, setNewPostContent] = useState(""); // 新しいメッセージの内容

  const handlePostMessage = async () => {
    // 新しいメッセージの内容を投稿
    const url = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`;
    const newPostData = {
      content: newPostContent,
      // 他の必要なデータを追加
    };

    const fetchData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPostData),
    };

    try {
      const response = await fetch(url, fetchData);
      if (response.ok) {
        // メッセージが正常に投稿された場合
        const newPost = await response.json();
        onMessagePosted(newPost); // 親コンポーネントに新しいメッセージを通知
        setNewPostContent(""); // 投稿内容をクリア
      } else {
        console.error("メッセージの投稿に失敗しました");
      }
    } catch (error) {
      console.error("APIリクエスト中にエラーが発生しました", error);
    }
  };

  return (
    <div className="MessageForm">
      <h3>新しいメッセージを投稿</h3>
      <textarea
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
        placeholder="メッセージを入力してください"
      />
      <button onClick={handlePostMessage}>投稿</button>
    </div>
  );
};

export default PostList;
