// @flow

import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import PathfindersNavbar from './PathfindersNavbar';
import Routes from './Routes';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <PathfindersNavbar />
        <Jumbotron className="jumbotron">
          <Routes />
          <br />
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}
