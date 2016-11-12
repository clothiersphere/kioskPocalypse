import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Main from './components/main.js';
import Admin from './components/admin.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/admin" component={Admin} />
  </Route>
);
