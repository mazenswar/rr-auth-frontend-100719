import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route path="/auth" component={Pages.Auth} />
      <Route path="/hooks" component={Pages.HooksForm} />
      <Route path="/authclass" component={Pages.AuthClass} />
      <Route path="/profile" component={Pages.Profile} />
      <Route path="/characters" component={Pages.Characters} />
    </Switch>
  );
};

export default Routes;
