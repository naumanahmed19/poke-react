import React, { Component } from 'react';

import Form from '../common/form';
const Joi = require('@hapi/joi');

class LoginForm extends Form {
    state = {
        data: { email: '', password: '' },
        errors: {}
    }

    schema = {
        email: Joi.string().email({ minDomainSegments: 2 }).label('Email'),
        password: Joi.string().label('Password')
    }

    doSubmit = () => {
        console.log('here');
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
