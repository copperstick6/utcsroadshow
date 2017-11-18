import React, { Component } from 'react';
import './index.css';

export default class Header extends Component {
  constructor(props){
    super(props)
    this.aboutClick = this.aboutClick.bind(this)
    this.homeClick = this.homeClick.bind(this);
    this.eventsClick = this.eventsClick.bind(this);
    this.contactClick = this.contactClick.bind(this);
    this.joinClick = this.joinClick.bind(this);
  }
  homeClick(event){
    event.preventDefault();
    this.props.callBackParent('Entry');
  }
  aboutClick(event){
    event.preventDefault()
    this.props.callBackParent('About');
  }
  eventsClick(event){
    event.preventDefault()
    this.props.callBackParent('Events');
  }
  contactClick(event){
    event.preventDefault()
    this.props.callBackParent('Contact');
  }
  joinClick(event){
    event.preventDefault()
    this.props.callBackParent('Join');
  }
  render() {
    return (
      <div id="header-container">
        <header>
          <nav>
            <div class="nav-elem"><a href="#" onClick = {this.aboutClick}>About</a></div>
            <div class="nav-elem">&emsp;&emsp;&emsp;/&emsp;&emsp;</div>
            <div class="nav-elem"><a href="#" onClick = {this.eventsClick}>Events</a></div>
            <a href="$" onClick = {this.homeClick}><img id="logo" alt="logo" src="images/logo.png" /></a>
            <div class="nav-elem"><a href="#" onClick = {this.contactClick}>Contact</a></div>
            <div class="nav-elem">&emsp;&emsp;&emsp;/&emsp;&emsp;</div>
            <div class="nav-elem"><a href="#" onClick = {this.joinClick}>Join</a></div>
          </nav>
        </header>
      </div>
    );
  }
}
