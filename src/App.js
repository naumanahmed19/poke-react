import React from 'react';
import './App.css';
import Pokemons from './components/pokemons';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import NavBar from './components/navbar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      < Pokemons />
    </React.Fragment>
  );
}

export default App;
