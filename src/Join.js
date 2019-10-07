import React, { Component } from 'react';
import './join.css';

export default class Join extends Component {
  constructor(props){
    super(props)
  }

  render() {

    const jointext = "We're looking for committed UT students to help us make our team even better! Whether you're interested in gaining real experience creating content for the materials team, or enhancing your speech skills with the presentations team, we'd love to have you!";
    
    // all officer photos should be square aspect ratio
    const officers = [
      { name: "Raychel", position: "President", url: "/images/raychel.jpg" },
      { name: "Ann", position: "Vice President", url: "/images/ann.jpg" },
      { name: "Sahil", position: "Finance", url: "/images/sahil.jpg" },
      { name: "Jenny", position: "Marketing", url: "/images/jenny.jpg" },
      { name: "Ella", position: "Events", url: "/images/ella.jpeg" },
      { name: "Nila", position: "Technology", url: "/images/nila.jpg" },
      { name: "Cole", position: "Curriculum", url: "/images/cole.jpg" },
      { name: "Siddhi", position: "Operations", url: "/images/siddhi.jpg" },
      { name: "Ria", position: "Recruitment", url: "/images/ria.jpeg" },
      { name: "Bill Bulko", position: "Faculty Advisor", url: "/images/bulko.jpg" },
    ];


    return (  
      <div className="join">
        <h1>INTERESTED IN JOINING?</h1>
        <p>{jointext}</p>
        <a className="join-button" href="https://www.facebook.com/groups/549689365148387/events/">
          Join the Facebook group to see our upcoming events
        </a>
      
        <h1>MEET THE TEAM</h1>
        <div className="officers">
          {
            officers.map((officerProps) => 
              <OfficerCard {...officerProps}></OfficerCard>
            )
          }
        </div>
      </div>
    );
  }
}

function OfficerCard(props) {
  return (
    <div className="officer-card">
      <img className="officer-photo" src={props.url}/>
      <h4 className="officer-name">{props.name}</h4>
      <div className="officer-position">{props.position}</div>
    </div>
  );
}
