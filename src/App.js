import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import Pokemons from './components/pokemons';
import PokemonDetails from './components/pokemon-details';

function App() {
  return (
    <div className="row">
      <div className="col-md-6 p-5">
        <Search />
        <Pokemons />
      </div>
      <div className="col-md-6">
        <PokemonDetails />
      </div>
    </div>
  );
}

export default App;
