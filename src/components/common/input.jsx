import React from 'react';

const Input = ({ name, label, type, value, onChange }) => {
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
        </div>
    );
}

export default Input;