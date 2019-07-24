import React from 'react';
import { render } from 'react-dom';
import Route from './Route.jsx';

render(<Route />, document.getElementById('root'));

// 热更新
if (module.hot) {
  module.hot.accept();
}
