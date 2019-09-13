import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Pokemons from './components/pokemons';
import NavBar from './components/navbar';
import RegisterPage from './components/auth/register-page';
import NotFoundPage from './components/not-found-page';
import LoginPage from './components/auth/login-page';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import './App.css';
import Logout from './components/auth/logout';
import auth from './services/authService';


console.log(process.env);

class App extends Component {

  state = {
    user: '',
  }

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {


    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/logout" component={Logout} />
          <Route path="/not-found" component={NotFoundPage} />
          <Route path="/" exact component={Pokemons} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment >
    )
  }


}

export default App;
