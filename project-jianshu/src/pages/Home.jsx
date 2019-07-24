import React, { Component, Fragment } from 'react';
import HOC from '../components/HOC.jsx';
import Concat from '../components/Concat.jsx';
import Listsmuen from '../components/Listsmuen.jsx';
import './home.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="home-box">
          <div className="concat-box">
            <Concat />
          </div>
          <div className="lists-rt">
            <Listsmuen />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HOC(Home, true);
