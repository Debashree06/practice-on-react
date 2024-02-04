/**
 * <div id="parent">
 * <div id="child">
 * <h1>I am a h1 tag</h1>
 * <h1>I am a h2 tag</h1>
 *</div>
 <div id="child2">
 * <h1>I am a h1 tag</h1>
 * <h1>I am a h2 tag</h1>
 *</div>
 *</div>
 ReactElement(Object) => HTML (Browser Understand)
 **/

//nested elements
const parent = React.createElement(
  "div",
  { id: "parent" }, //parent is a object - object is a react element
  [
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", {}, "I'm a h1 tag"), //two elements as a siblings
        React.createElement("h1", {}, "I'm a h2 tag"),
      ] //array of children
    ),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm a h1 tag"), //two elements as a siblings
      React.createElement("h1", {}, "I'm a h2 tag"),
    ]),
  ]
);
const heading = React.createElement(
  "h1",
  { id: "heading" }, //give attributes to the object
  "Hello world from React!" //children
); //create a h1 tag

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root")); //i create a root inside react where all Dom manipulation execute , everything will render render inside root

root.render(parent); // root ="<div id="root"> "
