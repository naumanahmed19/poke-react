import React, { Component } from 'react';
import Spinner from './common/spinner';
import Like from './common/like';
import { getCurrentUser, authenticated } from '../services/authService';
import { getPokemon } from '../services/pokemonsService';
import { addToFavourites } from '../services/favouriteService';

import { Parser } from 'json2csv';

class PokemonDetails extends Component {
    state = {
        id: '',
        pokemon: [],
        loaded: false,
        liked: false,
    }



    async componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.state.pokemon._id) {
            this.setState({
                loaded: false
            });

            const { data } = await getPokemon(nextProps.id)

            this.setState({
                pokemon: data,
                loaded: true,
            });

            //like update
            if (authenticated() && this.state.pokemon.likes && this.state.pokemon.likes.length) {
                const copyPokemon = this.state.pokemon;
                copyPokemon.liked = copyPokemon.likes.includes(getCurrentUser()._id);
                this.setState({
                    pokemon: copyPokemon,
                })
            }
        }
    }


    //Allow LoggedIn user - Add To Favourites
    handleLike = async pokemon => {
        if (!authenticated())
            this.props.history.push({
                pathname: '/login',
                state: { from: this.props.history.locations }
            })
        const response = await addToFavourites(pokemon);
        if (response.status === 200) {
            const newpokemon = this.state.pokemon;
            newpokemon.liked = !newpokemon.liked;

            this.setState({
                pokemon: newpokemon
            });
        }
    }


    //Convert json to CSV & Download
    handleDownload = () => {
        const fields = ['name', 'weight', 'height'];
        try {
            const parser = new Parser(fields);
            const csv = parser.parse(this.state.pokemon);
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv));
            element.setAttribute('download', this.state.pokemon.name);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        } catch (err) {
            console.error(err);
        }
    }



    render() {

        const { id } = this.props;
        const { loaded, pokemon } = this.state;

        return (
            id ?
                loaded ?
                    <div className="">
                        <div className="d-flex align-items-center mb-3">
                            <img src={pokemon.image} className="mr-3 rounded-circle bg-light" alt={pokemon.name} />
                            <h1>{pokemon.name}</h1>
                            <Like liked={pokemon.liked} onLike={() => this.handleLike(pokemon)} />
                            <button type="button" class="btn btn-outline-primary ml-auto" onClick={this.handleDownload}>Download</button>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">
                                Height <span className="badge badge-primary float-right">{pokemon.height}</span>
                            </li>
                            <li className="list-group-item">
                                Wight <span className="badge badge-primary float-right">{pokemon.weight} </span>
                            </li>
                            <li className="list-group-item">
                                Base Experience <span className="badge badge-secondary float-right">{pokemon.base_experience} </span>
                            </li>
                        </ul>
                    </div>
                    : <Spinner />

                : <div className="center"><small>Please Select a pokemon!</small></div>

        );
    }
}

export default PokemonDetails;