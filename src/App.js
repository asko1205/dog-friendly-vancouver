import React, { Component } from 'react';
import logo from './dogfriendlyvan.svg';
import './App.css';
import Map from './Map/Map';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cafes: [{
          "name": "The Buzz Cafe & Espresso Bar",
          "address": "901 Homer St, Vancouver, BC",
          "latitude": 49.278401,
          "longitude": -123.11872,
          "dogsAllowedInside": false,
          "dogsAllowedPatio": false
      },
      {
          "name": "Black Echo Coffee",
          "address": "1144 Mainland St, Vancouver, BC",
          "latitude": 49.27494,
          "longitude": -123.12109,
          "dogsAllowedInside": false,
          "dogsAllowedPatio": false
      }]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Map cafes={this.state.cafes}/>
      </div>
    );
  }
}

export default App;
