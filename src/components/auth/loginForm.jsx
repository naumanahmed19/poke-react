import React, { Component } from 'react';
import Joi from '@hapi/joi';
import Form from '../common/form';
import { login } from '../../services/userService';
import { async } from 'q';



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
            const { data: jwt } = await login(this.state.data);
            localStorage.setItem('token', jwt);
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
