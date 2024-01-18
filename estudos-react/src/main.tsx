import React from "react";
import ReactDOM from "react-dom/client";
import App from "./templates/home/index.tsx";
import "./style/global-style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
