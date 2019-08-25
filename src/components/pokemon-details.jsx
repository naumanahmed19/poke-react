import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './common/spinner';

class PokemonDetails extends Component {
    state = {
        id: '',
        pokemon: [],
        loaded: false,
    }


    // componentDidUpdate() {
    //     if (this.state.id !== this.props.id) {
    //         axios.get(`http://localhost:3000/api/pokemons/${this.props.id}`).then((response) => {
    //             this.setState({
    //                 pokemon: response.data,
    //                 loaded: true
    //                 id: '',

    //             })
    //         });
    //     }
    // }


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
    // async componentWillUpdate(nextProps, prevState) {
    //     if (this.props.id !== this.state.pokemon._id) {
    //         await axios.get(`http://localhost:3000/api/pokemons/${nextProps.id}`).then((response) => {

    //             this.setState({
    //                 pokemon: response.data,
    //                 loaded: true
    //             });
    //         });



    //     }



    // }

    render() {
        const { id } = this.props;
        const { loaded, pokemon } = this.state;
        return (

            id ?
                loaded ?
                    <div className="center">{pokemon.name}</div>
                    : <Spinner />

                : <div className="center"><small>Please Select a pokemon!</small></div>

        );
    }
}

export default PokemonDetails;