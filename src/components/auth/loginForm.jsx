import React from 'react';
import { Redirect } from 'react-router-dom';
import Joi from '@hapi/joi';
import Form from '../common/form';
import auth from '../../services/authService';

class LoginForm extends Form {
    state = {
        data: { email: '', password: '' },
        errors: {}
    }

    schema = {
        email: Joi.string().email({ minDomainSegments: 2 }).label('Email'),
        password: Joi.string().label('Password')
    }
    doSubmit = async () => {

        try {
            await auth.login(this.state.data);
            window.location = '/';
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.email = ex.response.data;
                this.setState({ errors });
            }
        }
    }

    render() {
        if (auth.getCurrentUser()) return <Redirect to="/" />;
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('Email', 'email', 'email')}
                {this.renderInput('Password', 'password', 'password')}
                {this.renderButton('Login')}
            </form>
        );
    }
}

export default LoginForm;
