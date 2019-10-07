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
    const description = (
        <Fade in={true} delay={0}>
          <div className="entry-textbox" id ="description">
            We visit local K-12 schools to teach students about Computer Science and other opportunities kids can take to get involved.
          </div>
        </Fade>
    );

    const learnmore = (
      <Fade in={true} delay={1000}>
        <div className="entry-textbox" id ="learn-more" onClick={() => this.props.callBackParent('About')}>
          <img src="images/learn_more.png"/>
        </div>
      </Fade>
    );
      
    const joinus = (
      <Fade in={true} delay={2000}>
        <div className="entry-textbox" id ="join-us" onClick={() => this.props.callBackParent('Join')}>
          <img src="images/join.png"/>
        </div>
      </Fade>
    );

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

    const gallery = (
      <div id="images">
        <ImageGallery items={images} showNav={false} showThumbnails={false} autoPlay = {true} slideDuration={5000}/>
      </div>
    );

    const form = (
      <div id="schedule-form">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeDkaG6po6bIuzwayEe35EeHINJT-ceauxLaDdVYRrTCFvDGw/viewform?embedded=true" 
          height={600} frameBorder={0} marginHeight={0} marginWidth={0}>Loading...</iframe>
      </div>);

    return (
      <div>

        <div id="title-banner">
          <div id="title-img">
            <Typist onTypingDone = {this.ended}>{"WE ARE UTCS ROADSHOW"}</Typist>
          </div>
          <div className={"flex"}>
            <div className={"entry-text-container"}>
              {this.state.typed && description}
              {this.state.typed && learnmore}
              {this.state.typed && joinus}
            </div>
            <div>
              {form}
            </div>
          </div>
          {this.state.typed && gallery}
        </div>
      </div>
    );

  }

}
