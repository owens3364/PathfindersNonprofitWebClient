// @flow

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactGA from 'react-ga';

export default class ONE_THREE_FOUR_NINE_SEVEN extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div id="13479">
        <Container fluid>
          <Row>
            <Col>
              <h1>FTC 13497</h1>
              <p>FTC 13497</p>
              <h1>What's Happening With The FTC Pathfinders?</h1>
              <p>What's Happening With The FTC Pathfinders?</p>
              <h1>Upcoming Events</h1>
              <p>Upcoming Events</p>
              <h1>Meet The Team</h1>
              <p>Meet The Team</p>
              <h1>Finances</h1>
              <h2>How We Spend Our Money</h2>
              <h2>How Donations Make A Difference</h2>
              <h2>What We Need</h2>
              <h2>What We Want</h2>
              <br />>
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}
