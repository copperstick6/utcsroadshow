import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import Typist from 'react-typist';
import './Typist.css'
import Fade from 'react-fade-opacity'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


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
    let gallery = null;
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
    if(this.state.typed === true){
      console.log("entered")
      appear = <div id ="title-fade"><Fade in={true} delay={100}><p>We visit local K-12 schools to teach students about Computer Science and other opportunities kids can take to get involved.</p></Fade></div>
      gallery = <div id="images"><ImageGallery items={images} showNav={false} showThumbnails={false} autoPlay = {true} slideDuration={400}/></div>
    }

    return (
      <div>
      <div id="banner"></div>
      <div>
      <div id="title-img"><Typist onTypingDone = {this.ended}>WE ARE UTCS ROADSHOW</Typist>
      <center>{gallery}</center>
      {appear}
      </div>
      </div>
      </div>
    );
  }
}
