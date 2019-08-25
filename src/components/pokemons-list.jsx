import React from 'react';


const PokemonsList = ({ pokemons, onItemClick, selectedItem }) => {
    return (<ul className="list-group mt-3">
        {
            pokemons.map(pokemon =>
                <li key={pokemon._id}
                    className={selectedItem === pokemon._id ? 'list-group-item active' : 'list-group-item'}
                    onClick={() => onItemClick(pokemon._id)} >
                    <div className="d-flex align-items-center">
                        <img src={pokemon.image} className="mr-3" alt="..." width="40" />
                        <div className="media-body">
                            <h6 className="mt-0 mb-1">{pokemon.name}</h6>
                            {/* <small>Height: {pokemon.height} |  Weight: {pokemon.weight}</small> */}
                        </div>
                    </div>
                </li>
            )
        }
    </ul>);
}

export default PokemonsList;