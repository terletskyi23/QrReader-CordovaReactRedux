import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Item1 from './components/Item1';
import Item2 from './components/Item2';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/item1" component={Item1} />
      <Route path="/item2" component={Item2} />
    </Switch>
  )
};

export default Routes;
