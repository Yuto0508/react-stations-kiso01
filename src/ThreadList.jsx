import React, { useState, useEffect } from "react";

export const ThreadList = () => {
  const [thread, setthread] = useState([]);
  const [threadID, setthreadID] = useState([]);
  let threadArray = [];
  let threadIDArray = [];

  async function getThreadList() {
    const url =
      "https://railway.bulletinboard.techtrain.dev/threads";
    const getData = await fetch(url, {
      method: "GET",
    });
    const response = await getData.json();
    for (let i = 0; i < response.length; i++) {
      threadArray.push(response[i].title);
      threadIDArray.push(response[i].id);
    }
    setthread(threadArray);
    setthreadID(threadIDArray);
    console.log(response);
  }
  useEffect(() => {
    getThreadList();
  }, []);
  const newThreadList = thread.map((newThread, index) => {
    return (
      <li key={index} value={newThread}>
        {newThread}
      </li>
    );
  });

  return (
    <div className="createdThread">
      <ul className="newThreadList">{newThreadList}</ul>
    </div>
  );
};
