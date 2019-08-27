import axios from 'axios';

const apiEndPoint = 'http://localhost:3000/api/pokemons/';

export function getPokemons() {
    return axios.get(apiEndPoint);
}

export function getPokemon(id) {
    return axios.get(apiEndPoint + id);
}