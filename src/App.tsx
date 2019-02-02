import React, { Component } from 'react';
import { request } from 'graphql-request';

import logo from './logo.svg';
import './App.css';

const query = `{
  points {
    gid
    geom
  }
}`;

request('http://localhost:8080/v1alpha1/graphql', query).then(data =>
  console.log(data)
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
