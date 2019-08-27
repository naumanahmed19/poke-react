import React, { Component } from 'react';
import Input from '../common/input';

class LoginForm extends Component {
    state = {
        account: {
            email: '',
            password: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            account: {
                email: this.state.account.email.val
            }
        })
        console.log('here');

    }

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({
            account
        })

    }

    render() {
        const { account } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>

                <Input
                    label="Email"
                    value={account.email}
                    onChange={this.handleChange}
                    type="email"
                    className="form-control"
                    name="email" />
                <Input
                    label="Password"
                    value={account.password}
                    onChange={this.handleChange}
                    type="password"
                    className="form-control"
                    name="password" />

                <button className="btn btn-primary mt-4">Submit</button>
            </form>
        );
    }
}

export default LoginForm;
