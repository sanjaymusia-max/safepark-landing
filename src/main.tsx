import React from "react";
import ReactDOM from "react-dom/client";
import SafeParkSite from "./SafeParkSite"; // ← use your component directly
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SafeParkSite />
  </React.StrictMode>
);
