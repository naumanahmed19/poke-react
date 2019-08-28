import React, { Component } from 'react';
import RegisterForm from './registerForm';

class RegisterPage extends Component {
    state = {}
    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="card mt-5 bg-light">
                            <div className="card-body">
                                <h1>Register Now</h1>
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default RegisterPage;