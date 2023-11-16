import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PostForm from "./PostForm"; // PostForm コンポーネントのインポート
import PostList from "./PostList"; // PostList コンポーネントのインポート

export const Post = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title } = location.state || { id: "", title: "" };
  const [detailData, setDetailData] = useState({
    threadId: "threadId",
    posts: [],
  });
  const { thread_id } = useParams();
  const url = `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`;

  // コメントを投稿する関数
  const handleCommentSubmit = async (content) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post: content}),
      });

      if (response.ok) {
        // 投稿成功後、スレッドの詳細情報を再取得
        const detailResponse = await fetch(url);
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
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setDetailData(data);
      } catch (error) {
        console.error("APIリクエストエラー:", error);
      }
    };

    fetchDetailData();
  }, [url]);

  return (
    <div className="Postform">
      <h3>title: {title}Yutoの掲示板</h3>
      <p>id: {thread_id}</p>

      {/* コメント投稿フォームの表示 */}
      <PostForm onCommentSubmit={handleCommentSubmit} />

      {/* コメント一覧の表示 */}
      <PostList posts={detailData.posts} />

      {/* 戻るボタン */}
      <button type="button" onClick={() => navigate("/")}>
        戻る
      </button>
    </div>
  );
};

export default Post;
