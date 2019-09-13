import httpService from './httpService';


export function getPokemons($params = '') {
    return httpService.get('/pokemons/?' + $params);
}

export function getPokemon(id) {
    return httpService.get('/pokemons/' + id);
}