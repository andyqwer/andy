import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Home from './pages/Home.jsx';
import './public/style.scss';

export default class AppRoute extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
