import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './common/spinner';
import PokemonsList from './pokemons-list';
import Search from './search';
import PokemonDetails from './pokemon-details';
import { getPokemons } from '../services/pokemonsService';
import { authenticated } from '../services/authService';
import Filter from './filter';
import Input from './common/input';

class Pokemons extends Component {
    state = {
        pokemons: [],
        loaded: false,
        selectedItem: '',
        fillter: {
            name: '',
            favourites: false,
        },

    }

    async componentDidMount() {
        await this.fetchPokemons();
    }

    async fetchPokemons() {

        this.setState({
            loaded: false
        });


        //clone Filter object
        var paramsObject = Object.assign({}, this.state.fillter);

        //if favourites false delete from object
        if (!paramsObject.favourites) delete paramsObject['favourites'];

        //If name is empty delete from object
        if (paramsObject.name == "") delete paramsObject['name'];

        //Conver object to params
        const params = Object.entries(paramsObject).map(([key, val]) => `${key}=${val}`).join('&');

        const { data } = await getPokemons(params);

        this.setState({
            pokemons: data,
            loaded: true
        })
    }

    handleItemClick = (id) => {
        this.setState({
            selectedItem: id
        })
    }


    handleSearch = (evt) => {
        const state = this.state.fillter.name = evt.target.value;
        this.setState({ state });
        this.fetchPokemons();
    }


    handleFillterFavourites = () => {
        let fav = !this.state.fillter.favourites; //Toggle Favourites button
        let state = this.state.fillter.favourites = fav;
        this.setState({ state });
        this.fetchPokemons();
    }

    render() {
        const { pokemons, loaded, selectedItem, fillter } = this.state;
        return (

            <div className="row no-gutters">
                <div className="col-md-6 p-5 bg-light">

                    <Search value={fillter.search} onChange={(evt) => this.handleSearch(evt)} />

                    {authenticated() ? <Filter favourites={this.handleFillterFavourites} /> : ''}

                    {loaded ?
                        <PokemonsList pokemons={pokemons} onItemClick={this.handleItemClick} selectedItem={selectedItem} />
                        : <Spinner />}
                </div>
                <div className="col-md-6">
                    <div className="position-fixed details p-5">
                        <PokemonDetails id={selectedItem} history={this.props.history} />
                    </div>

                </div>
            </div>


        );
    }
}

export default Pokemons;