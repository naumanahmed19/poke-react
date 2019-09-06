import React from 'react';


const PokemonsList = ({ pokemons, onItemClick, selectedItem }) => {
    return (
        pokemons.length > 0 ?
            <ul className="list-group mt-3">
                {
                    pokemons.map(pokemon =>
                        <li key={pokemon._id}
                            className={selectedItem === pokemon._id ? 'list-group-item active' : 'list-group-item'}
                            onClick={() => onItemClick(pokemon._id)} >
                            <div className="d-flex align-items-center">
                                <img src={pokemon.image} className="mr-3 rounded-circle bg-light" alt={pokemon.name} width="40" />
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">{pokemon.name}</h6>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul> :
            <div className="text-center my-5">
                <h4>Nothing Found</h4>
            </div>);
}

export default PokemonsList;