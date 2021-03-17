import React from "react";
import ReactDom from "react-dom";

function Hello(prop) {
  console.log("prop");
  console.log(prop);
  /* return React.createElement(
    "div",
    { style: { color: "blue" } },
    "Hello ",
    "World, ",
    prop.name,
    "!"
  ); */
  return <div style={{ color: "blue" }}>Hello, {prop.name} </div>;
}

function World() {
  return <div style={{ color: "green" }}>World</div>;
}

function HelloWorld(prop) {
  {
    /* Comment example */
    // foo
  }
  return (
    <React.Fragment>
      <Hello /> <World /> {prop.name};
    </React.Fragment>
  );
}

ReactDom.render(<HelloWorld name='Kari' />, document.querySelector("#root"));
