// @flow

import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMdMail
} from 'react-icons/io';
import '../stylesheets/navbar.css';

export default class Footer extends Component {
  render() {
    return (
      <Navbar
        fixed="bottom"
        sticky="bottom"
        className={'navbar titanic'}
        variant="dark"
        expand="lg"
      >
        <Container fluid>
          <Col>
            <Row>
              <Navbar.Brand className="titanic">Connect With Us!</Navbar.Brand>
            </Row>
            <Row className="navbar titanic">
              <Navbar.Brand
                href="https://www.facebook.com/13497.FTC.Pathfinders/"
                target="_blank"
              >
                <IoLogoFacebook />
              </Navbar.Brand>
              <Navbar.Brand
                href="https://github.com/owens3364/"
                target="_blank"
              >
                <IoLogoGithub />
              </Navbar.Brand>
              <Navbar.Brand href="mailto:pathfinders13497@gmail.com">
                <IoMdMail />
              </Navbar.Brand>
              <Navbar.Brand
                href="https://www.instagram.com/pathfinders13497/"
                target="_blank"
              >
                <IoLogoInstagram />
              </Navbar.Brand>
              <Navbar.Brand
                href="https://twitter.com/pathfinder13497/"
                target="_blank"
              >
                <IoLogoTwitter />
              </Navbar.Brand>
            </Row>
          </Col>
        </Container>
      </Navbar>
    );
  }
}
