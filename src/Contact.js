import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>CONTACT US</h1>
        <p>For general questions and inquiries, contact utcsroadshow@gmail.com.</p>
        <p><a href="https://www.facebook.com/groups/549689365148387/events/">Join the Facebook group!</a></p>
        <div id="schedule-form">
            To schedule a visit, fill out this form below.
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeDkaG6po6bIuzwayEe35EeHINJT-ceauxLaDdVYRrTCFvDGw/viewform?embedded=true" 
              width="400" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
          </div>
      </div>
    );
  }
}
