import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Andrew
        </a>
        <button class='aki'>Akshay's Button</button>
        <button class='aki'>Jacob's Button</button>
      </header>
      <body>
        <div>
          <p>Hello</p>
        </div>
      </body>
    </div>
  );
}

export default App;
