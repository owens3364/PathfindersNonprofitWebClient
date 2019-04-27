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
              <p>
                Pathfinders Robotics is a 501(c)3 nonprofit organization and
                shall operate exclusively for education and charitable purposes
                within the meaning of Section 501 (c)(3) of the Internal Revenue
                Code, or the corresponding section of any future Federal tax
                code. Pathfinders Robotics' purpose is to develop and teach
                youth in{' '}
              </p>
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
