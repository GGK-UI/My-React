# Just React # 

**Episode-01 - Inception**

1) html:5 :- <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello Word!";
        const root = document.getElementById("root");
        root.appendChild(heading)
       </script> 

2) const heading = React.createElement("h1", {id:"heading"}, "Hello World!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

3) React.createElement is an {Object} => HTML (Browser Understand) 

4) const parent = React.createElement(
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

5) git Process : - Create New Repo , git init , git branch -M main, git add . , git commit -m "Episode-01", git remote set-url origin git://https://github.com/GGK-UI/Just-React.git, git push orgin main,

