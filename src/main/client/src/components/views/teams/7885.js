// @flow

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactGA from 'react-ga';

export default class SEVEN_EIGHT_EIGHT_FIVE extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div id="7885">
        <Container fluid>
          <Row>
            <Col>
              <h1>FLL 7885</h1>
              <p>FLL 7885</p>
              <h1>What's Happening With The FLL Pathfinders?</h1>
              <p>What's Happening With The FLL Pathfinders?</p>
              <h1>Upcoming Events</h1>
              <p>Upcoming Events</p>
              <h1>Meet The Team</h1>
              <p>Meet The Team</p>
              <h1>Finances</h1>
              <h2>How We Spend Our Money</h2>
              <h2>How Donations Make A Difference</h2>
              <h2>What We Need</h2>
              <h2>What We Want</h2>
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}
