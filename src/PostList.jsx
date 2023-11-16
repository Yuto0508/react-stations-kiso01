import React from "react";

const PostList = (props) => {
  // props から投稿一覧を取得
  const posts = props.posts;

  // 投稿一覧を表示するための関数 newPostsList
  const newPostsList = () => {
    const list = [];
    for (let a = 0; a < posts.length; a++) {
      // 投稿一覧から各投稿の内容を取得し、リストアイテムとして追加
      list.push(<li key={posts[a].id}>{posts[a].post}</li>);
    }
    return list;
  };

  // コンポーネントのレンダリング
  return (
    <div>
      {/* 新しい投稿一覧を表示 */}
      {newPostsList()}
    </div>
  );
};

export default PostList;