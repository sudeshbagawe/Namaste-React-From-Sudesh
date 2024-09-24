import React from "react";
import ReactDOM from "react-dom/client";

//JSX is transpiled before it reach to javascript by Bundler  Parcel => Babel
//Bables transpiles to React.createElements =>Objects =>HtmlElements(render);

//created  react elements but this is not a good  practice to  craete a react elememts 😒
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is our normal HTML heading"
);

//This is the way to write heading using JSX it make devs life more easier ✔.
// you can call it HTML like Syntax bu it not be a HTML
const jsxheading = (
  <h1 className="head" tabIndex="3">
    This is a jsx heading And this is not an HTML this is a JSX{" "}
  </h1>
);
console.log(heading);
console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// Explore Various  attr For Various Tags in React JSX
// 1)For <div>
const exploredElemAttr = (
  <>
    <div
      id="container"
      className="my-div"
      style={{ backgroundColor: "milky", padding: "10px" }}
      onClick={() => alert("Div Clicked")}
    >
      Hello Div
    </div>

    <input
      id="input"
      className="my-input"
      type="text"
      placeholder="Enter your Name"
      value={name}
      onChange={(e) => alert("Name Changed")}
    />

    <button
      id="btn"
      className="my-btn"
      type="button"
      onClick={() => alert("Button Clicked By sudesh")}
    >
      Click Me
    </button>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Kindly Fill Form Before Saving IT");
      }}
    >
      <input type="text" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>

    <img
      src="https://example.com/image.jpg"
      alt="Sample Image"
      width="300"
      height="300"
      loading="lazy"
    />

    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      React Documentation
    </a>

    <textarea
      value=""
      onChange={(e) => setText(e.target.value)}
      rows="4"
      cols="5"
    ></textarea>

    <select value="" onChange={(e) => setSelectedOptions(e.target.value)}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>

    <ul style={{ listStyleType: "square" }}>
      <li>List Item 1</li>
      <li>List Item 2</li>
    </ul>
  </>
);
root.render(exploredElemAttr);
//But Browser Can't Understand Jsx  syntxt  then who  will transpile this code? The parcel is Working the behind  the sceen
// to transpile the jsx in javascript engine understandale format.Thanks Parcel
//It's  a Babels Job ?? Unerstand About Babel
