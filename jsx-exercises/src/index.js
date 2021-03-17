import React, { createElement } from "react";
import ReactDom from "react-dom";

function MyThing({ username }) {
  const showAlert = () => {
    alert("Hi");
  };

  const LoggedIn = (
    <>
      <div className='title'>The Title</div>
      <div className='author'>
        <button onClick={showAlert}>The Author is {username}</button>.
      </div>
      <ul className='stats'>
        <li className='rating'>5 stars</li>
        <li className='isbn'>12-345678-910</li>
      </ul>
    </>
  );

  const NotLoggedIn = <p>User is not logged in.</p>;
  return username ? LoggedIn : NotLoggedIn;
}

function MyThing2(props) {
  return [
    React.createElement("div", { className: "title" }, "The Title"),
    React.createElement(
      "div",
      { className: "author" },
      `The Author is ${props.username}`
    ),
    React.createElement("ul", { className: "stats" }, [
      React.createElement("li", { className: "rating" }, "5 stars"),
      React.createElement("li", { className: "isbn" }, "12-345678-910"),
    ]),
  ];
}

/* function MyThing2(props) {
  if (props.name) {
    return React.createElement("div", {}, [
      React.createElement("div", { className: "title" }, "The Title"),
      React.createElement(
        "div",
        { className: "author" },
        `The Author is ${props.name}`
      ),
      React.createElement("ul", { className: "stats" }, [
        React.createElement("li", { className: "rating" }, "6 stars"),
        React.createElement("li", { className: "isbn" }, "12-345678-910"),
      ]),
    ]);
  } else {
    return React.createElement("span", {}, "Not logged in");
  }
} */

const Table = () => {
  return (
    <table>
      <tbody>
        <tr>
          <Data />
        </tr>
      </tbody>
    </table>
  );
};

const Data = () => {
  return (
    <>
      <td>Alpha</td>
      <td>Bravo</td>
      <td>Charlie</td>
    </>
  );
};

ReactDom.render(<Table />, document.querySelector("#root"));
