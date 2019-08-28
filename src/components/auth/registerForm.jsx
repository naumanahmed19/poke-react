import React, { Component } from 'react';

import Form from '../common/form';
const Joi = require('@hapi/joi');

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

    doSubmit = () => {
        console.log('here');
    }

    render() {

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
