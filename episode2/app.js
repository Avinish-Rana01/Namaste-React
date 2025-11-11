import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child1", key: "child1" },
      [
        React.createElement("h1", { id: "heading1", key: "h1a" }, "REACT1"),
        React.createElement("h2", { id: "heading2", key: "h2a" }, "React1")
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "child2" },
      [
        React.createElement("h1", { id: "heading3", key: "h1b" }, "REACT2"),
        React.createElement("h2", { id: "heading4", key: "h2b" }, "React2")
      ]
    )
  ] 
); 
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log('root',root.render)
root.render(heading);
