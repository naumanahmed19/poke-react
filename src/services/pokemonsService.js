import axios from 'axios';
import auth from './authService';
const apiEndPoint = 'http://localhost:3000/api/pokemons/';

axios.defaults.headers.common['x-auth-token'] = auth.getJwt();

export function getPokemons($params = '') {

    console.log(apiEndPoint + '?' + $params);
    return axios.get(apiEndPoint + '?' + $params);
}

export function getPokemon(id) {
    return axios.get(apiEndPoint + id);
}