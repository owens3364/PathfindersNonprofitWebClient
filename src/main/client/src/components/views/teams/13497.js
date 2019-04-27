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
              <p>
                Our team began with an FLL team (7885 Masterbuilders). Sabarish
                and Owen were on FLL team Masterbuilders from 2014-2017. Their
                first season, the team advanced to the Iowa state championships.
                The following year, Shriya joined the team. While we did not
                advance to state that season, we created an app concept. During
                the summer of 2016, Katie and Sean joined the team and we
                entered the app concept in the Verizon App Challenge, winning
                Best In State and $5000 for our school. Sabarish, Shriya, Owen,
                and Sankalp (a senior at Waukee High School) wrote the app in
                2017 and won the Congressional App Challenge with it. We were
                invited to share our app in Washington D.C. at the National
                House of Code. In our third and last year (2016-2017) in FLL, we
                again advanced to the Iowa state championships, this time
                winning a Project Innovation award.
              </p>
              <p>
                The FLL team morphed into an FTC team, and Arya, Benjamin, and
                Kristen joined. We won the Connect award and finalized in the
                Motivate and Think awards at our league tournament. We advanced
                to the super qualifiers, where we won the Connect award again
                and went to state. This season, Sean, Arya, Owen, and Kristen
                entered the Congressional App Challenge with a new app and won.
                They were invited to the National House of Code in Washington
                D.C. to share their app.
              </p>
              <p>
                Our team is currently managed by our coaches Shannon and
                Bhooshan, who are two parent volunteers who have been
                volunteering with the team for the last two years. We are also
                mentored by Srinivas Magatapalli, who mentored us on our robot
                and game strategy.
              </p>
              <h1>Our Mission</h1>
              <p>
                Our team strives to motivate communities by connecting with
                professionals from various sectors and promoting STEM and FIRST
                to children, in addition to encouraging high-quality work,
                emphasizing the value of others, and respecting each other and
                the community.
              </p>
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
