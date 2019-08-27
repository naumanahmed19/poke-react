import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './common/spinner';
import PokemonsList from './pokemons-list';
import Search from './search';
import PokemonDetails from './pokemon-details';

class Pokemons extends Component {
    state = {
        pokemons: [],
        loaded: false,
        selectedItem: '',

    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/pokemons').then((response) => {
            this.setState({
                pokemons: response.data,
                loaded: true
            })
        });
    }

    handleItemClick = (id) => {
        this.setState({
            selectedItem: id
        })
    }


    render() {
        const { pokemons, loaded, selectedItem } = this.state;
        return (

            <div className="row no-gutters">
                <div className="col-md-6 p-5 bg-light">
                    <Search />
                    {loaded ?
                        <PokemonsList pokemons={pokemons} onItemClick={this.handleItemClick} selectedItem={selectedItem} />
                        : <Spinner />}
                </div>
                <div className="col-md-6">
                    <div className="position-fixed details p-5">
                        <PokemonDetails id={selectedItem} />
                    </div>

                </div>
            </div>


        );
    }
}

export default Pokemons;