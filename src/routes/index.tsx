import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import MovieDetail from '../pages/MovieDetail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/movies:id+" component={MovieDetail} />
  </Switch>
);

export default Routes;
