import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './common/spinner';
import Like from './common/like';

class PokemonDetails extends Component {
    state = {
        id: '',
        pokemon: [],
        loaded: false,
    }


    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.id !== this.state.pokemon._id) {
            this.setState({

                loaded: false
            });
            axios.get(`http://localhost:3000/api/pokemons/${nextProps.id}`).then((response) => {
                this.setState({
                    pokemon: response.data,
                    loaded: true
                });
            });



        }
    }


    handleLike = pokemon => {
        const newpokemon = this.setState.pokemon;
        newpokemon.liked = !newpokemon.liked;
        this.setState({
            pokemon: newpokemon
        });
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
                            <Like liked={pokemon.liked} onLike={this.handleLike} />
                            <button type="button" class="btn btn-outline-primary ml-auto">Download</button>
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