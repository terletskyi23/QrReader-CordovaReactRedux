import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Scanner from './components/pages/Scanner';
import Result from './components/pages/Result';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Scanner} />
      <Route path="/scanner" component={Scanner} />
      <Route path="/result" component={Result} />
      <Route component={Home} />
    </Switch>
  )
};

export default Routes;
