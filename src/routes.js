import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Logon from './pages/Logon';
import Profile from './pages/Profile';
import Register from './pages/Register';
import NewIdea from './pages/NewIdea';
import Brain from './pages/Brain';
import Info from './pages/Info';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Logon} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/login" exact component={Login} />
        <Route path="/ideias/nova" exact component={NewIdea} />
        <Route path="/brain" exact component={Brain} />
        <Route path="/info" exact component={Info} />

      </Switch>
    </BrowserRouter>
  )
}
