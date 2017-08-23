import React, { Component } from 'react';
import './index.css';

export default class Header extends Component {
  constructor(){
    super()
    this.aboutClick = this.aboutClick.bind(this)
  }
  aboutClick(event){
    event.preventDefault()
    console.log("pressed")
  }
  eventsClick(event){
    event.preventDefault()
  }
  contactClick(event){
    event.preventDefault()
  }
  joinClick(event){
    event.preventDefault()
  }
  render() {
    return (
      <div id="header-container">
        <header>
          <nav>
            <div class="nav-elem"><a href="#" onClick = {this.aboutClick}>About</a></div>
            <div class="nav-elem">&emsp;&emsp;&emsp;/&emsp;&emsp;</div>
            <div class="nav-elem"><a href="#" onClick = {this.eventsClick}>Events</a></div>
            <a href="index.html"><img id="logo" alt="logo" src="images/logo.png" /></a>
            <div class="nav-elem"><a href="#" onClick = {this.contactClick}>Contact</a></div>
            <div class="nav-elem">&emsp;&emsp;&emsp;/&emsp;&emsp;</div>
            <div class="nav-elem"><a href="#" onClick = {this.joinClick}>Join</a></div>
          </nav>
        </header>
      </div>
    );
  }
}