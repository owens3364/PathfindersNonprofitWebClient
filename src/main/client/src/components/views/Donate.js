// @flow

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Checkout from './Checkout';
export default class Donate extends Component {
  render() {
    return (
      <div id="donate">
        <Container fluid>
          <Row>
            <Col>
              <h1>Donate</h1>
              <p1>Donate</p1>
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
