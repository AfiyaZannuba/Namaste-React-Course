const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {id: "h1tag"}, "I'm Afiya"), React.createElement("p", {id:"ptag"}, "how are you?")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)