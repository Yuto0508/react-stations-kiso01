import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function callApi() {
  const res = await fetch(
    "https://railway.bulletinboard.techtrain.dev/threads"
  );
  const users = await res.json();
  console.log(users);
}

async function callApi2() {
  const res = await fetch(
    "https://railway.bulletinboard.techtrain.dev/threads/{threadId}/posts"
  );
  const users = await res.json();
  console.log(users);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
callApi();
callApi2().catch(console.error);
