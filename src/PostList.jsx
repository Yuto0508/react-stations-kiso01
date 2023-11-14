import React from "react";

// PostList コンポーネント
// props として受け取った投稿データ（posts）を表示する
const PostList = ({ posts }) => {
  return (
    <ul>
      {/* 投稿が存在する場合のみ表示 */}
      {posts && posts.length > 0 && (
        <ul>
          {/* 投稿データをマップしてリストアイテムに表示 */}
          {posts.map((post, index) => (
            <li key={index}>{post.content}</li>
          ))}
        </ul>
      )}
    </ul>
  );
};

export default PostList;
