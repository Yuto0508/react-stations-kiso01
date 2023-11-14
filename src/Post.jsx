import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PostForm from "./PostForm";  // PostForm コンポーネントのインポート
import PostList from "./PostList";  // PostList コンポーネントのインポート

export const Post = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title } = location.state || { id: "", title: "" };
  const [detailData, setDetailData] = useState({
    threadId: "threadId",
    posts: [{ content: "初期投稿" }],
  });
  const [postComplete, setPostComplete] = useState(false);
  const { thread_id } = useParams();
  const threadDetailUrl = `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=20`;
  const postCommentUrl = `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`;

  // コメントを投稿する関数
  const handleCommentSubmit = async (comment) => {
    try {
      const response = await fetch(postCommentUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: comment }),
      });

      if (response.ok) {
        setPostComplete(true);

        // 投稿成功後、スレッドの詳細情報を再取得
        const detailResponse = await fetch(threadDetailUrl);
        const detailData = await detailResponse.json();
        setDetailData(detailData);
      } else {
        console.error("メッセージの投稿に失敗しました");
      }
    } catch (error) {
      console.error("APIリクエストエラー", error);
    }
  };

  // コンポーネントがマウントされた際に、スレッドの詳細情報を取得
  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await fetch(threadDetailUrl);
        const data = await response.json();
        setDetailData(data);
      } catch (error) {
        console.error("APIリクエストエラー:", error);
      }
    };

    fetchDetailData();
  }, [threadDetailUrl]);

  return (
    <div>
      <h3>title: {title}</h3>
      <p>id: {thread_id}</p>

      {/* コメント投稿フォームの表示 */}
      <PostForm onCommentSubmit={handleCommentSubmit} />

      {/* コメント一覧の表示 */}
      <PostList posts={detailData.posts} />

      {/* 戻るボタン */}
      <button type="button" onClick={() => navigate("/Home")}>
        戻る
      </button>

      {/* 投稿が完了した場合に成功メッセージを表示 */}
      {postComplete && <p>コメントを投稿しました</p>}
    </div>
  );
};

export default Post;
