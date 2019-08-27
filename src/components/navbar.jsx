import React, { Component, useState } from 'react';


import { Modal, Button, Form, FormGroup } from 'react-bootstrap';
import LoginForm from './auth/loginForm';

class NavBar extends Component {
    state = {}


    render() {
        function Example() {
            const [show, setShow] = useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

            const handleClick = () => {
                console.log('goo');
            }

            return (

                <>

                    <Button variant="outline-primary" onClick={handleShow}>
                        Login In
                </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <LoginForm />
                        </Modal.Body>

                    </Modal>
                </>
            );
        }
        return (
            <div class="d-flex sticky-top  flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
                <h5 class="my-0  font-weight-normal">[ - Pokemons - ]</h5>
                <nav class="my-2 my-md-0 mr-md-3 mr-md-auto mr-3 ml-4">
                    <a class="p-2 text-dark" href="#">My Favourites</a>
                </nav>
                <Example />
            </div>
        );
    }
}

export default NavBar;
