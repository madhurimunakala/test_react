import React from 'react';
import ReactDOM from 'react-dom';

var jsxHeading = (
    <div>
<h1 id="jsxHeading">Heading from JSX!!</h1>
<h1 id="jsxHeading2">Heading from JSX!!</h1>
<h1>Hello, world!</h1>
      <p>This is a paragraph.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
      <br/>
      <br/>
      <button>click me</button>
    </div>
   
);
var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(jsxHeading);

