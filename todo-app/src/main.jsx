import React from "react";
import ReactDOM from "react-dom/client"; // Correct import path for createRoot in React 18
import "./App.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
