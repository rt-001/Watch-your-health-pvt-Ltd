import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Base styles
import "./styles/App.css"; // Custom styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
