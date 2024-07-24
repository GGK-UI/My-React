import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 id="heading" tabIndex="5">
    I am Just React Element
  </h1>
);

// React Component

const TitleComponent = () => (
  <h1 id="heading" tabIndex="5">
    I am Just React Title Component
  </h1>
);
const num = 100;

const HeadingComponent = () => (
  <div id="container">
    {heading}
    {TitleComponent()}
    <TitleComponent />
    <TitleComponent></TitleComponent>
    {num + 10}
    <h1 className="heading">I am Heading Function Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
