import React, { Component } from 'react';
import logo from './images/poke_store.png';
import './bootstrap/css/bootstrap.css';
import './App.css';
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="container">
          <input type="hidden" id="token" />
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
