const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { }, "I am Good!"),
    React.createElement("h2", { }, "I am Good!"),
    React.createElement("h3", { }, "I am Good!"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
