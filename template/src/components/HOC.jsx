// HOT.jsx
import React, { Component } from 'react';
// import Loading from './Loading.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

export default WrappedComponent => {
  return class HOC extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div>
          <Header />
          <WrappedComponent {...this.props} />
          <Footer />
        </div>
      );
    }
  };
};
