import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Scanner from './components/pages/Scanner';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/scanner" component={Scanner} />
    <Route component={Home} />
  </Switch>
);

export default Routes;
