import React from 'react';


const Input = ({ name, label, type, value, onChange, error }) => {
    return (
        <div className="from-group">
            <label htmlFor="email">{label}</label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;