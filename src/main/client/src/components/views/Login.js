// @flow

import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class Login extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div id="login">
        <h1>Login</h1>
        <p>Login</p>
      </div>
    );
  }
}
