import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import Typist from 'react-typist';
import './Typist.css'
import Fade from 'react-fade-opacity'
export default class Entry extends Component {
  constructor(props){
    super(props)
    this.state ={
      typed : false
    }
    this.ended = this.ended.bind(this)
  }
  ended(){
    this.setState({typed: true})
  }
  render() {
    let appear = null
    if(this.state.typed === true){
      appear = <div id="title-img"><Fade in={true} delay={100}><p>We visit local K-12 schools to teach students about Computer Science and about opportunities kids can take to get involved.</p></Fade></div>
    }
    return (
      <div>
      <div id="banner"></div>
      <div id="title-img"><Typist onTypingDone = {this.ended}>WE ARE UTCS ROADSHOW</Typist></div>
      {appear}
      </div>
    );
  }
}
