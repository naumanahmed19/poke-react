import React, { Component } from 'react';

class Pokemons extends Component {
    state = {}
    render() {
        return (
            <ul className="list-unstyled mt-5">
                <li className="media">
                    <img src="..." className="mr-3" alt="..." />
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla.
                         </div>
                </li>
            </ul>
        );
    }
}

export default Pokemons;