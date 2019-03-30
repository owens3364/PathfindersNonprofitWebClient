// @flow

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactGA from 'react-ga';

export default class Highlights extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div id="highlights">
        <Container fluid>
          <Row>
            <Col>
              <h1>Highlights</h1>
              <p>Highlights</p>
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}
