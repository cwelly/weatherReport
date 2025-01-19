import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App 컴포넌트를 import
import "./assets/styles/global.css"; // 전역 스타일 import (선택 사항)

const root = ReactDOM.createRoot(document.getElementById("root")); // HTML의 root 엘리먼트
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
