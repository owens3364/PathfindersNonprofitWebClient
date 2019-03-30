// @flow

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Leagues from '../Leagues';
import ReactGA from 'react-ga';

export default class Create extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div id="create">
        <Container fluid>
          <Row>
            <Col>
              <h1>Create A Team</h1>
              <h2>What Does Creating A Team Entail?</h2>
              <p>
                Creating a team through our website is easy and straight
                forward. First, choose your league. Pathfinders Robotics
                supports FIRST (For the Inspiration and Recognition of Science
                and Technology) Lego League Junior (FLL Jr.), FIRST Lego League
                (FLL), and FIRST Tech Challenge (FTC). Then, create your account
                as a Coach. Please ensure you read our Terms of Use Agreement.
                Finally, Invite other Assistant Coaches, Students, and Parents
                to be on your team. Then, our web resources and student mentors
                will help answer any questions you have.
              </p>
              <h2>How We Can Help</h2>
              <p>
                Pathfinders Robotics is dedicated to help you create your team.
                First, Pathfinders Robotics automates all of your financial
                needs. Any sponsorships your team receives go to an account
                Pathfinders Robotics holds in your team's name. Almost any order
                you have can be made through our website, and our services
                ensure you don't have to worry about going in the red. Financial
                logs and analytics are made available to you automatically, and
                updated with every new sponsorship or order. Our team members
                are experienced, ready, and able to assist you in your team's
                creation and journey throughout the season. Lastly, to ensure
                your financial success, Pathfinders Robotics provides all of
                this for only 3% of sponsorship funds, or a flat fee of $106.
              </p>
              <h1>Leagues</h1>
              <br />
              <Leagues />
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}
