import React, { Component } from 'react';

export default class Events extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>CALENDAR</h1>
        <div>
          <a href="https://www.facebook.com/groups/549689365148387/events/">
            Check out our events on Facebook.
          </a>
        </div>
        <iframe 
          src="https://calendar.google.com/calendar/b/2/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=utcsroadshow%40gmail.com&amp;color=%2329527A&amp;ctz=America%2FChicago" 
          width="800" height="600" frameBorder="0" scrolling="no">
        </iframe>
      </div>
    );
  }
}
