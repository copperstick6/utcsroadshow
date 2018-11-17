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
        original: process.env.PUBLIC_URL + '/images/roadshow1.jpg',
        thumbnail: process.env.PUBLIC_URL + '/images/roadshow1.jpg',
      },
      {
		  original: process.env.PUBLIC_URL + '/images/roadshow2.jpg',
          thumbnail: process.env.PUBLIC_URL + '/images/roadshow2.jpg',
      },
    ]
    if(this.state.typed === true){
      console.log("entered")
      appear = <div id ="title-fade"><Fade in={true} delay={100}><p>We go to local K-12 schools to teach students about Computer Science and other opportunities kids can take to get involved.</p></Fade></div>
      gallery = <div id="images"><ImageGallery items={images} showNav={false} showThumbnails={false} autoPlay = {true} slideDuration={5000}/></div>
    }

    return (
      <div>
	  <div id="title-img"><Typist onTypingDone = {this.ended}>WE ARE UTCS ROADSHOW</Typist>
      {gallery}
      {appear}
	  </div>
      </div>
    );
  }
}
