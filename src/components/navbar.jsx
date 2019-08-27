import React from 'react';

const NavBar = () => {
    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
            <h5 class="my-0  font-weight-normal">[ - Pokemons - ]</h5>
            <nav class="my-2 my-md-0 mr-md-3 mr-md-auto mr-3 ml-4">
                <a class="p-2 text-dark" href="#">My Favourites</a>
            </nav>
            <a class="btn btn-outline-primary" href="#">Log In</a>
        </div>
    );
}

export default NavBar;