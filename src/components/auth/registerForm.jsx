import React, { Component } from 'react';
import Joi from '@hapi/joi';
import { Redirect } from 'react-router-dom';
import Form from '../common/form';
import { register } from '../../services/userService';
import auth from '../../services/authService';


class RegisterForm extends Form {
    state = {
        data: { name: '', email: '', password: '' },
        errors: {}
    }

    schema = {
        name: Joi.string().label('Name'),
        email: Joi.string().email({ minDomainSegments: 2 }).label('Email'),
        password: Joi.string().label('Password')
    }

    doSubmit = async () => {
        try {
            const response = await register(this.state.data);
            auth.loginWithJwt('token', response.headers['x-auth-token']);
            window.location = '/';
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.email = ex.response.data;
                this.setState({ errors })
            }

        }

    }

    render() {
        if (auth.getCurrentUser()) return <Redirect to="/" />;
        return (

            <form onSubmit={this.handleSubmit}>
                {this.renderInput('Name', 'name', 'name')}
                {this.renderInput('Email', 'email', 'email')}
                {this.renderInput('Password', 'password', 'password')}
                {this.renderButton()}
            </form>
        );
    }
}

export default RegisterForm;
