import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1tag", key: "heading" }, "I'm Afiya"),
    React.createElement("h6", { id: "ptag", key: "paragraph" }, "how are you?")
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
