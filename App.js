import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I am Good!"),
    React.createElement("h2", { key: "h2" }, "I am Good!"),
    React.createElement("h3", { key: "h3" }, "I am Good!"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
