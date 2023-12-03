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
const nestedheader=
    React.createElement('div', { className: 'title' },
    [
    React.createElement('h1', {}, 'Heading 1 using react'),
    React.createElement('h2', {}, 'Heading 2 using react'),
    React.createElement('h3', {}, 'Heading 3 using react'),
    ]
  )
  const nestedHeader =(
      <div className="title">
        <h1>Heading 1 using JSX</h1>
        <h2>Heading 2 using JSX</h2>
        <h3>Heading 3 using JSX</h3>
      </div>
    );
    const InsideComponent = function(){
      return <h5 style={{ color: 'pink', fontSize: '12px' }}> Heading 5</h5>
  }
  
    const NestedHeader = () => {
      return (
        <div className="title">
          {jsxHeading}
          <h1 style={{ color: 'blue', fontSize: '24px' }}>Heading 1</h1>
          <InsideComponent/>
          <h2 style={{ color: 'red', fontSize: '20px' }}>Heading 2</h2>
          <h3 style={{ color: 'green', fontSize: '16px' }}>Heading 3</h3>
          <InsideComponent> </InsideComponent>
        </div>
      );
    };
    

const htmlRoot = document.getElementById("root");
const rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(<NestedHeader/>);

