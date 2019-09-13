import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
    return (


        <div className="
       
        d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm  sticky-top ">
            <h5 className="my-0 mr-md-auto font-weight-normal"><Link to="/">[ - Pokemons - ]</Link></h5>
            <nav className="my-2 my-md-0 mr-md-3">
                {(!user) && (
                    <>
                        <Link to="/login" className="p-2 text-dark">Login</Link>
                        <Link to="/register" className="p-2 text-dark">Register</Link>
                    </>
                )}
                {(user) && (
                    <>
                        <Link to="/login" className="p-2 text-dark">{user.name}</Link>
                        <Link to="/logout" className="p-2 text-dark">Logout</Link>
                    </>
                )}






            </nav>




        </div>

    );
}
export default NavBar;