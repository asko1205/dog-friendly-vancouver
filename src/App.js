import React, { Component } from 'react';
import logo from './dogfriendlyvan.svg';
import './App.css';
import Map from './Map/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Map isMarkerShown/>
      </div>
    );
  }
}

export default App;
