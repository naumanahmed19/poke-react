import React, { Component } from 'react';
import Input from './input';
const Joi = require('@hapi/joi');


class Form extends Component {
    state = {
        data: {},
        errors: {},
    }

    validate = () => {
        const options = { abortEarly: false }; //option for joi
        const { error } = Joi.validate(this.state.data, this.schema, options);
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
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} })  //Must return an object and not null
        if (errors) return;

        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
        //Validation on change
        const errors = { ...this.state.erros };
        const errorMessage = this.validateProperty(input);
        if (errorMessage)
            errors[input.name] = errorMessage;
        else
            delete errors[input.name];

        //assing input values to state
        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors })

    };

    renderButton(label = 'Submit') {
        return (
            <button className="btn btn-primary mt-4" disabled={this.validate()}>{label}</button>
        )
    }

    renderInput(label, name, type = 'text') {
        const { data, errors } = this.state;
        return (
            <Input
                label={label}
                name={name}
                type={type}
                value={data[name]}
                onChange={this.handleChange}
                error={errors[name]} />
        )
    }

}

export default Form;