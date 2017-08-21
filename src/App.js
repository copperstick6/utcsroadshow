import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import Header from './Header'
class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <div id="banner"></div>
      <div id="title-img"><h1>WE ARE UTCS ROADSHOW</h1></div>
      </div>
    );
  }
}

export default App;
