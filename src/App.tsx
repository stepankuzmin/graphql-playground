import React, { Component } from 'react';

import Points from './Points';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Points />
        </header>
      </div>
    );
  }
}

export default App;
