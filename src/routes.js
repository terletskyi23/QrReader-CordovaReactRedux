import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Scanner from './components/Scanner';
import Result from './components/Result';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/scanner" component={Scanner} />
      <Route path="/result" component={Result} />
      <Route component={Home} />
    </Switch>
  )
};

export default Routes;
