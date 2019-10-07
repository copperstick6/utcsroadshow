import React, { Component } from 'react';
import './about.css';

export default class About extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let whatwedo = "We go to local K-12 schools and give a thirty minute to one hour presentation to expose students to what Computer Science is, why Computer Science is important, and how kids can prepare for a career within Computer Science. We have presentations for students of all ages, and our hope is to get students excited about Computer Science!"
    let whatiscs = "We introduce the concept of Computer Science to kids with our presentation and with a group activity."
    let whycs = "Computer science teaches logical thinking and how to break down problems to solve methodically. It's fun, and having tech skills opens up many future opportunities."
    let howtoprepare = "We also introduce local programs and camps that students can attend, and talk about what classes they can take before their college career."
    return (
      <div>
        <div className={"about"}>
          <h1>WHAT WE DO</h1>
          <p>{whatwedo}</p>
          <div className={"flex about-text"}>
            <div>
              <img src="images/hello_world.png"/>
              <h2>What is CS?</h2>
              <p>{whatiscs}</p>
            </div>
            <div>
              <img src="images/graph.png"/>
              <h2>Why CS?</h2>
              <p>{whycs}</p>
            </div>
            <div>
              <img/>
              <h2>How to prepare?</h2>
              <p>{howtoprepare}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
