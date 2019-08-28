import React from 'react';
import './App.css';
import Pokemons from './components/pokemons';
import { Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import NavBar from './components/navbar';
import RegisterPage from './components/auth/register-page';
import NotFoundPage from './components/not-found-page';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Route path="/" exact component={Pokemons} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
