import React, { Component } from 'react';


class Search extends Component {
    state = {}
    render() {
        return (
            <input
                className="form-control form-control-lg"
                name="s" type="text"
                placeholder="Search ..."
                onChange={(evt) => this.props.onChange(evt)}></input>
        );
    }
}

export default Search;