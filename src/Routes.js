import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SplashPage from './pages/splash/SplashPage';
import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';

/**
 * Routes component containing routes for entire application.
 * @returns {JSX}
 */

const Routes = () => {
  return (
   <Switch>
     <Route exact path='/' component={SplashPage} />
     <Route exact path='/login' component={LoginPage} />
     <Route exact path='/main' component={MainPage} />
   </Switch>
  )
}

export default Routes
