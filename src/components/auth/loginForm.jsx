import React, { Component } from 'react';


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
                <div className="from-group">
                    <label htmlFor="email">Email</label>
                    <input
                        value={account.email}
                        onChange={this.handleChange}
                        type="email"
                        className="form-control"
                        name="email" />
                </div>
                <div className="from-group">
                    <label htmlFor="email">Email</label>
                    <input
                        value={account.password}
                        onChange={this.handleChange}
                        type="password"
                        className="form-control"
                        name="password" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default LoginForm;
