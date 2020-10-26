import React from 'react';
import Layout from './components/Layout/index';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/index';
import Colors from './Pages/Colors/index';
import Users from './Pages/Users/index';
import Settings from './Pages/Settings/index';

const Routes = ({ isMobile }) => {
  return (
    <Layout isMobile={isMobile}>
      <Switch>
        <Route path='/colors' component={Colors} />
        <Route path='/users' component={Users} />
        <Route path='/settings' component={Settings} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
