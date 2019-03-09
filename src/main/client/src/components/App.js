// @flow

import React, { Component } from 'react'
import PathfindersNavbar from './PathfindersNavbar'
import Routes from './Routes'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <PathfindersNavbar/>
        <Routes/>
        <Footer/>      
      </div>
    );
  }
}