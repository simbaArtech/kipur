import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ArticleProvider } from "./context/ArticleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ArticleProvider>
    <App />
  </ArticleProvider>
);
