// @flow

import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class Home extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div id="home">
        <h1>Who We Are</h1>
        <p>
          Pathfinders Robotics is a parent-run nonprofit organization (501(c)3
          pending) dedicated to providing support for student led FIRST robotics
          teams.
        </p>
        <h1>Our Mission</h1>
        <p>
          At Pathfinders Robotics, our mission is to support student led FIRST
          teams as best we can through the use of our student mentors, web
          resources, gracious sponsors, and 501(c)3 nonprofit capabilities.
        </p>
        <h1>Impact</h1>
        <p>Impact</p>
      </div>
    );
  }
}
