import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// props としてコメントが投稿された際の処理を受け取る（onCommentSubmit）
const PostForm = ({ onCommentSubmit }) => {
  // コメントの入力内容を管理する state
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  // テキスト入力フィールドの変更時に呼び出され、コメントの内容を更新
  const handleChange = (e) => setComment(e.target.value);

  // フォームが送信された際の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    // 親コンポーネントで受け取ったコメント投稿の処理を呼び出し
    onCommentSubmit(comment);
    // コメントの内容をクリア
    setComment("");
  };

  // コンポーネントのレンダリング
  return (
    <form onSubmit={handleSubmit}>
      {/* テキスト入力フィールド */}
      <input
        id="newComment"
        value={comment}
        type="text"
        size="50"
        placeholder="スレッドの内容を記載してください"
        onChange={handleChange}
      />
      <br></br>
      {/* 投稿ボタン */}
      <button type="submit">投稿</button>
      {/* 戻るボタン */}
      <button type="button" onClick={() => navigate("/")}>
        戻る
      </button>
    </form>
  );
};

export default PostForm;
