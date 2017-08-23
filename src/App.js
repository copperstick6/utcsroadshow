import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import Header from './Header'
import Entry from './Entry'
class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Entry />
      </div>
    );
  }
}

export default App;
