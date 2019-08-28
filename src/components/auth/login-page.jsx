import React, { Component } from 'react';
import LoginForm from './loginForm';

class LoginPage extends Component {
    render() {
        console.log(this.props.history);
        return (
            <main className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="card mt-5 bg-light">
                            <div className="card-body">

                                <h1>Login Now</h1>
                                <LoginForm history={this.props.history} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default LoginPage;