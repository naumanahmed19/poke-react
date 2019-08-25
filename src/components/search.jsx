import React, { Component } from 'react';

class Search extends Component {
    state = {}
    render() {
        return (
            <form>
                <input class="form-control form-control-lg" type="text" placeholder="Search ..."></input>
            </form>
        );
    }
}

export default Search;