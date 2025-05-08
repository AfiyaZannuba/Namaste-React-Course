import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return(
  <h1 className="head">
    Namaste React using JSX
  </h1>
  )
}

const HeadingComponent = () => {
  return(
    <>
    <Title />
    <h1>Namaste React Functional Component</h1>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
