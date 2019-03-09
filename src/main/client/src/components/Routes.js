// @flow

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SEVEN_EIGHT_EIGHT_FIVE from './views/teams/7885';
import ONE_THREE_FOUR_NINE_SEVEN from './views/teams/13497';
import Create from './views/teams/Create';
import Donate from './views/Donate';
import Highlights from './views/Highlights';
import Home from './views/Home';
import Login from './views/Login';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/donate" component={Donate} />
        <Route path="/highlights" component={Highlights} />
        <Route path="/login" component={Login} />
        <Route path="/teams/7885" component={SEVEN_EIGHT_EIGHT_FIVE} />
        <Route path="/teams/13497" component={ONE_THREE_FOUR_NINE_SEVEN} />
        <Route path="/teams/create" component={Create} />
        <Route component={Home} />
      </Switch>
    );
  }
}
