import React, { Component, Fragment } from 'react';
import HOC from '../components/HOC.jsx';
import './home.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Fragment />;
  }
}

export default HOC(Home, true);
