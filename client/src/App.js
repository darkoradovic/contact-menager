import React from 'react';
import './App.css';
import Navbar from './compoents/Layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './compoents/pages/Home';
import About from './compoents/pages/About';
import Register from './compoents/auth/Register';
import Login from './compoents/auth/Login';
import Alerts from './compoents/Layout/Alerts';
import PrivateRout from './compoents/routing/PrivateRout';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <React.Fragment>
              <Navbar title="Cotact Manager" />
              
                <Alerts />
                <Switch>
                  <PrivateRout exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              
            </React.Fragment>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
