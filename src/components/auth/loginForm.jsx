import React, { Component } from 'react';
import Input from '../common/input';
const Joi = require('@hapi/joi');

class LoginForm extends Component {
    state = {
        account: { email: '', password: '' },
        errors: {}
    }

    schema = {
        email: Joi.string().email({ minDomainSegments: 2 }).label('Email'),
        password: Joi.string().label('Password')
    }

    validate = () => {
        const options = { abortEarly: false }; //option for joi
        const { error } = Joi.validate(this.state.account, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    };

    validateProperty = ({ name, value }) => {

        const obj = { [name]: value };
        const scheme = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, scheme);
        console.log(error);
        return error ? error.details[0].message : null;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} })  //Must return an object and not null
        if (errors) return;

        console.log('here');

    }

    handleChange = ({ currentTarget: input }) => {
        //Validation on change
        const errors = { ...this.state.erros };
        const errorMessage = this.validateProperty(input);
        if (errorMessage)
            errors[input.name] = errorMessage;
        else
            delete errors[input.name];

        //assing input values to state
        const account = { ...this.state.account };
        account[input.name] = input.value;

        this.setState({ account, errors })

    }

    render() {
        const { account, errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>

                <Input
                    label="Email"
                    value={account.email}
                    onChange={this.handleChange}
                    type="email"
                    className="form-control"
                    name="email"
                    error={errors.email} />
                <Input
                    label="Password"
                    value={account.password}
                    onChange={this.handleChange}
                    type="password"
                    className="form-control"
                    name="password"
                    error={errors.password} />

                <button className="btn btn-primary mt-4">Submit</button>
            </form>
        );
    }
}

export default LoginForm;
