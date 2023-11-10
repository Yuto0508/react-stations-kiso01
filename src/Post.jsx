import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Postコンポーネントを定義
export const Post = () => {
  // 画面遷移用の関数を取得
  const navigate = useNavigate();
  // 現在のロケーション情報を取得
  const location = useLocation();
  // スレッドのIDとタイトルを取得
  const { id, title } = location.state || { id: "", title: "" };
  // 新しいコメントの内容を格納するステート
  const [comment, setComment] = useState("");
  // 投稿の詳細データを格納するステート
  const [detailData, setDetailData] = useState({
    threadId: "threadId",
    posts: []
  });
  // 投稿が完了したかどうかを示すフラグ
  const [postComplete, setPostComplete] = useState(false);

  // テキスト入力フィールドの変更時に呼び出され、新しいコメントの内容を更新
  const handleChange = (e) => setComment(e.target.value);

  // スレッドの詳細情報を取得するAPIエンドポイントのURL
  const threadDetailUrl = `https://railway.bulletinboard.techtrain.dev/threads/{threadId}/posts`;
  // コメントを投稿するAPIエンドポイントのURL
  const postCommentUrl = `https://railway.bulletinboard.techtrain.dev/threads/{threadId}/posts`;

  // コメントを投稿する関数
  const handleCommentSubmit = (e) => {
    e.preventDefault();

    axios
      .post(postCommentUrl, { content: comment }) // コメントの内容をボディに設定
      .then((response) => {
        setPostComplete(true);

        axios
          .get(threadDetailUrl)
          .then((response) => {
            const data = response.data;
            setDetailData(data);
          })
          .catch((error) => {
            console.error("APIリクエストエラー:", error);
          });
      })
      .catch((error) => {
        console.error("APIリクエストエラー", error);
      });
  };

  // コンポーネントがレンダリング後に、スレッドの詳細情報を取得
  useEffect(() => {
    axios
      .get(threadDetailUrl)
      .then((response) => {
        const data = response.data;
        setDetailData(data);
      })
      .catch((error) => {
        console.error("APIリクエストエラー:", error);
      });
  }, [threadDetailUrl]);

  // コンポーネントのレンダリング
  return (
    <form onSubmit={handleCommentSubmit}>
      <div>
        <h3>title: {title}</h3>
        <p>id: {id}</p>
        <input
          id="newComment"
          value={comment}
          type="text"
          size="50"
          placeholder="内容を記載してください"
          onChange={handleChange}
        />

        {/* コメント一覧の表示 */}
        {detailData.posts && detailData.posts.length > 0 && (
          <table>
            <tbody>
              {detailData.posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div>
          <button className="row-button">投稿</button>
          <button className="row-button" onClick={() => navigate("/")}>
            戻る
          </button>
        </div>

        {/* 投稿が完了した場合に成功メッセージを表示 */}
        {postComplete && <p>コメントを投稿しました</p>}
      </div>
    </form>
  );
};

export default Post;
