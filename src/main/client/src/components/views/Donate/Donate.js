// @flow

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Checkout from './Checkout';
import ReactGA from 'react-ga';

export default class Donate extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div id="donate">
        <Container fluid>
          <Row>
            <Col>
              <h1>Donate</h1>
              <p>Donate</p>
            </Col>
            <Col>
              <Checkout />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
