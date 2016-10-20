import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Main from './components/main.js';
import MainInterface from './components/mainInterface.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/mainInterface" component={MainInterface} />
  </Route>
);
